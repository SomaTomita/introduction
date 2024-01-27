import Container from "src/components/container";
import { getPostBySlug } from "../../lib/api";
import PostHeader from "src/components/post/post-header";
import Image from "next/image"
import TwoColumn, { TwoColumnMain, TwoColumnSidebar } from "src/components/two-column";
import PostBody from "src/components/post/post-body";
import ConvertBody from "src/components/post/convert-body";
import PostCategories from "src/components/post/post-categories";
import extractText from "src/lib/extract-text"
import Meta from "src/components/meta"

export default function Schedule({ title, publish, content, eyecatch, categories, description, }) {
	return (
		<Container>
			<Meta
				pageTitle={title}
				pageDesc={description}
				pageImg={eyecatch.url}
				pageImgW={eyecatch.width}
				pageImgH={eyecatch.height}
			/>

			<article>
				<PostHeader title={title} subtitle="Contents" publish={publish} />

				<figure>
					<Image
						src={eyecatch.url}
						alt=""
						layout="responsive"
						width={eyecatch.width}
						height={eyecatch.height}
						sizes="(min-width: 1152px) 1152px, 100vw"
						priority
					/>
				</figure>

				<TwoColumn>
					<TwoColumnMain>
						<PostBody>
							<ConvertBody contentHTML={content} />
						</PostBody>
					</TwoColumnMain>
					<TwoColumnSidebar>
						<PostCategories categories={categories} />
					</TwoColumnSidebar>
				</ TwoColumn>
			</article>
		</Container >
	)
}


export async function getStaticProps() {
	const slug = 'テスト'
	const post = await getPostBySlug(slug)

	const description = extractText(post.content)

	return {
		props: {
			title: post.title,
			publish: post.publishDate,
			content: post.content,
			eyecatch: post.eyecatch,
			categories: post.categories,
			description: description
		},
	}
}
