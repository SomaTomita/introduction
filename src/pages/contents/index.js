import { getAllPosts } from 'src/lib/api'
import Meta from 'src/components/meta'
import Container from 'src/components/layout/container'
import Hero from 'src/components/hero'
import Posts from 'src/components/post/posts'
// import { getPlaiceholder } from 'plaiceholder'
import { eyecatchLocal } from 'src/lib/constants' // ローカルの代替アイキャッチ画像


export default function Contents({ posts }) {
	return (
		<Container>
			<Meta pageTitle="ブログ" pageDesc="ブログの記事一覧" />

			<Hero title="Posts" subtitle="Recent Posts" />

			<Posts posts={posts} />
		</Container>
	)
}


export async function getStaticProps() {
	const posts = await getAllPosts()

	for (const post of posts) {
		if (!post.hasOwnProperty('eyecatch')) {
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
