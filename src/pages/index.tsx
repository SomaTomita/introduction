import Container from 'src/components/layout/container'
import Hero from 'src/components/hero'
import Meta from 'src/components/meta'
import Pagenation from 'src/components/post/pagenation'
import Posts from 'src/components/post/posts'
import { getAllPosts } from 'src/lib/api'
import { eyecatchLocal } from 'src/lib/constants'
import type { PostListItem } from 'src/types'
import type { GetStaticProps } from 'next'
// import { getPlaiceholder } from "plaiceholder"

interface HomeProps {
	posts: PostListItem[]
}

export default function Home({ posts }: HomeProps) {
	return (
		<Container>
			<Meta />

			<Hero title="Intro" subtitle="Portfolio Website" imageOn />

			<Posts posts={posts} />
			<Pagenation nextUrl="/contents" nextText="More Posts" />
		</Container>
	)
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const posts = await getAllPosts(4)

	for (const post of posts) {
		if (!post.eyecatch) {
			post.eyecatch = eyecatchLocal
		}
		//   const { base64 } = await getPlaiceholder(post.eyecatch.url)
		//   post.eyecatch.blurDataURL = base64
	}

	return {
		props: {
			posts: posts,
		},
	}
}
