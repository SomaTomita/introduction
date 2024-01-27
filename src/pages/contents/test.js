import Container from "src/components/container";
import { getPostBySlug } from "../../lib/api";
import PostHeader from "src/components/post-header";

export default function Schedule({ title, publish, content, eyecatch, categories, }) {
	return (
		<Container>
			<article>
				<PostHeader title={title} subtitle="Contents" publish={publish} />
			</article>
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
