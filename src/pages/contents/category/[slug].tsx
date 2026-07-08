import { getAllCategories, getAllPostsByCategory } from 'src/lib/api'
import Meta from 'src/components/meta'
import Container from 'src/components/layout/container'
import PostHeader from 'src/components/post/post-header'
import Posts from 'src/components/post/posts'
// import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'src/lib/constants' // ローカルの代替アイキャッチ画像
import type { PostListItem } from 'src/types'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface CategoryPageProps {
	name: string
	posts: PostListItem[]
}

export default function Category({ name, posts }: CategoryPageProps) {
	return (
		<Container>
			<Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
			<PostHeader title={name} subtitle="Blog Contents Category" />
			<Posts posts={posts} />
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const allCats = await getAllCategories()
	return {
		paths: allCats.flatMap(({ slug }) =>
			(locales ?? []).map((locale) => ({ params: { slug }, locale })),
		),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<CategoryPageProps> = async (context) => {
	const allCats = await getAllCategories()

	// slugに基づいて該当するカテゴリを検索
	const catSlug = context.params?.slug as string
	const cat = allCats.find(({ slug }) => slug === catSlug)

	if (!cat) {
		return { notFound: true }
	}

	// カテゴリIDに基づいて投稿を取得
	const posts = await getAllPostsByCategory(cat.id)

	// 取得した投稿にアイキャッチがない場合は、デフォルトの画像を設定
	for (const post of posts) {
		if (!post.eyecatch) {
			post.eyecatch = eyecatchLocal
		}
		// const { base64 } = await getPlaiceholder(post.eyecatch.url)
		// post.eyecatch.blurDataURL = base64
	}

	return {
		props: {
			name: cat.name,
			posts: posts,
		},
	}
}
