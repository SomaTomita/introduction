import Container from "src/components/container";
import { getPostBySlug } from "../../lib/api"

export default function Schedule({ title, publishData, content, eyecatch, categories, }) {
	return (
		<Container>
			<h1>{title}</h1>
		</Container>
	)
}


export async function getStaticProps() {
	const slug = 'テスト'

	const post = await getPostBySlug(slug)
	return {
		props: {
			title: post.title,
			publish: post.publishDate,
			content: post.content,
			eyecatch: post.eyecatch,
			categories: post.categories
		},
	}
}
