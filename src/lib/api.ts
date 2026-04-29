import { createClient } from 'microcms-js-sdk'
import type { Post, PostListItem, SlugEntry, Category } from 'src/types'
import { eyecatchLocal } from './constants'
import { loadEnv } from './env'
import { logger } from './logger'
import {
	categorySchema,
	microCmsListSchema,
	postListItemSchema,
	postSchema,
	slugEntrySchema,
} from './schemas'

const env = loadEnv()

export const client = createClient({
	serviceDomain: env.SERVICE_DOMAIN,
	apiKey: env.API_KEY,
})

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
	try {
		const raw = await client.get({
			endpoint: 'contents',
			// 指定したスラッグの記事データを取得して返す処理
			queries: { filters: `slug[equals]${slug}` },
		})
		const parsed = microCmsListSchema(postSchema).parse(raw)
		// 一意のスラッグ名に紐づくコンテンツを返す
		return parsed.contents[0]
	} catch (err: unknown) {
		logger.error('api.getPostBySlug', `Failed to fetch post for slug=${slug}`, err)
		return undefined
	}
}

export async function getAllSlugs(limit: number = 100): Promise<SlugEntry[]> {
	try {
		const raw = await client.get({
			endpoint: 'contents',
			// プロパティはtitleとslugを指定し、投稿日順に並び替え
			queries: {
				fields: 'title,slug,',
				orders: '-publishDate',
				limit: limit,
			},
		})
		// コンテンツオブジェクトのプロパティ内の配列として返す。
		return microCmsListSchema(slugEntrySchema).parse(raw).contents
	} catch (err: unknown) {
		logger.error('api.getAllSlugs', 'Failed to fetch slugs', err)
		return []
	}
}

export async function getAllPosts(limit: number = 100): Promise<PostListItem[]> {
	try {
		const raw = await client.get({
			endpoint: 'contents',
			queries: {
				fields: 'title,slug,eyecatch',
				orders: '-publishDate',
				limit: limit,
			},
		})
		const parsed = microCmsListSchema(postListItemSchema).parse(raw)
		return parsed.contents.map((item) => ({
			...item,
			eyecatch: item.eyecatch ?? eyecatchLocal,
		}))
	} catch (err: unknown) {
		logger.error('api.getAllPosts', 'Failed to fetch posts', err)
		return []
	}
}

export async function getAllCategories(limit: number = 100): Promise<Category[]> {
	try {
		const raw = await client.get({
			endpoint: 'categories',
			queries: {
				fields: 'name,id,slug',
				limit: limit,
			},
		})
		return microCmsListSchema(categorySchema).parse(raw).contents
	} catch (err: unknown) {
		logger.error('api.getAllCategories', 'Failed to fetch categories', err)
		return []
	}
}

export async function getAllPostsByCategory(
	catID: string,
	limit: number = 100,
): Promise<PostListItem[]> {
	try {
		const raw = await client.get({
			endpoint: 'contents',
			queries: {
				filters: `categories[contains]${catID}`, // カテゴリIDによるフィルタリング
				fields: 'title,slug,eyecatch',
				orders: '-publishDate',
				limit: limit,
			},
		})
		const parsed = microCmsListSchema(postListItemSchema).parse(raw)
		return parsed.contents.map((item) => ({
			...item,
			eyecatch: item.eyecatch ?? eyecatchLocal,
		}))
	} catch (err: unknown) {
		logger.error('api.getAllPostsByCategory', `Failed to fetch posts for category=${catID}`, err)
		return []
	}
}
