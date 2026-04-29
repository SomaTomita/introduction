import { getAllPosts } from 'src/lib/api'
import Meta from 'src/components/meta'
import Container from 'src/components/layout/container'
import Hero from 'src/components/hero'
import Posts from 'src/components/post/posts'
// import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'src/lib/constants' // ローカルの代替アイキャッチ画像
import type { PostListItem } from 'src/types'
import type { GetStaticProps } from 'next'

interface ContentsProps {
	posts: PostListItem[]
}

export default function Contents({ posts }: ContentsProps) {
	return (
		<Container>
			<Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

			<Hero title="Posts" subtitle="Recent Posts" />

			<Posts posts={posts} />
		</Container>
	)
}

export const getStaticProps: GetStaticProps<ContentsProps> = async () => {
	const posts = await getAllPosts()

	for (const post of posts) {
		if (!post.eyecatch) {
			post.eyecatch = eyecatchLocal
		}
		// const { base64 } = await getPlaiceholder(post.eyecatch.url)
		// post.eyecatch.blurDataURL = base64
	}

	return {
		props: {
			posts: posts,
		},
	}
}
