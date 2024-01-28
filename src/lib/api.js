import { createClient } from "microcms-js-sdk"

export const client = createClient({
	serviceDomain: process.env.SERVICE_DOMAIN,
	apiKey: process.env.API_KEY,
})


export async function getPostBySlug(slug) {
	try {
		const post = await client.get({
			endpoint: "contents",
			// 指定したスラッグの記事データを取得して返す処理
			queries: { filters: `slug[equals]${slug}` },
		})
		// 一意のスラッグ名に紐づくコンテンツを返す
		return post.contents[0]
	} catch (err) {
		console.log(`~~ getPostBySlug ~~`);
		console.log(err);
	}
}


export async function getAllSlugs(limit = 100) {
	try {
		const slugs = await client.get({
			endpoint: 'contents',
			// プロパティはtitleとslugを指定し、投稿日順に並び替え
			queries: {
				fields: `title,slug,`,
				orders: '-publishDate',
				limit: limit
			},
		})
		// コンテンツオブジェクトのプロパティ内の配列として返す。
		return slugs.contents
	} catch (err) {
		console.log(`~~ getAllSlugs ~~`);
		console.log(err);
	}
}


export async function getAllPosts(limit = 100) {
	try {
		const posts = await client.get({
			endpoint: 'contents',
			queries: {
				fields: 'title,slug,eyecatch',
				orders: '-publishDate',
				limit: limit,
			},
		})
		// コンテンツオブジェクト内の配列として返す。
		return posts.contents
	} catch (err) {
		console.log('~~ getAllPosts ~~')
		console.log(err)
	}
}