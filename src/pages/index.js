import Container from "src/components/layout/container";
import Hero from "src/components/hero";
import Meta from "src/components/meta";
import Pagenation from "src/components/post/pagenation";
import Posts from "src/components/post/posts"
import { getAllPosts } from "src/lib/api";
import { eyecatchLocal } from "src/lib/constants";
// import { getPlaiceholder } from "plaiceholder"

export default function Home({ posts }) {
	return (
		<Container>
			<Meta />

			<Hero title="Intro" subtitle="Portfolio Website" imageOn />

			<Posts posts={posts} />
			<Pagenation nextUrl="/contents" nextText="More Posts" />
		</Container>
	)
}


export async function getStaticProps() {
	const posts = await getAllPosts(4)

	for (const post of posts) {
		if (!post.hasOwnProperty('eyecatch')) {
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