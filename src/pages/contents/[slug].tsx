import Container from 'src/components/layout/container'
import { getPostBySlug, getAllSlugs } from 'src/lib/api'
import PostHeader from 'src/components/post/post-header'
import Image from 'next/image'
import TwoColumn, { TwoColumnMain, TwoColumnSidebar } from 'src/components/layout/two-column'
import PostBody from 'src/components/post/post-body'
import ConvertBody from 'src/components/post/convert-body'
import PostCategories from 'src/components/post/post-categories'
import extractText from 'src/lib/extract-text'
import Meta from 'src/components/meta'
import { eyecatchLocal } from 'src/lib/constants'
// import { getPlaiceholder } from "plaiceholder"
import prevNextPost from 'src/components/post/prev-next-post'
import Pagenation from 'src/components/post/pagenation'
import type { Eyecatch, Category, SlugEntry } from 'src/types'
import type { GetStaticPaths, GetStaticProps } from 'next'

interface PostPageProps {
	title: string
	publish: string
	content: string
	eyecatch: Eyecatch
	categories: Category[]
	description: string
	prevPost: SlugEntry
	nextPost: SlugEntry
}

export default function Post({
	title,
	publish,
	content,
	eyecatch,
	categories,
	description,
	prevPost,
	nextPost,
}: PostPageProps) {
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
						key={eyecatch.url}
						src={eyecatch.url}
						alt=""
						layout="responsive"
						width={eyecatch.width}
						height={eyecatch.height}
						sizes="(min-width: 1152px) 1152px, 100vw"
						priority
						// 画像が完全に読み込まれるまで、画像のぼかしバージョンをプレースホルダーとして使用する
						// placeholder="blur"
						// blurDataURL={eyecatch.blurDataURL}
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
				</TwoColumn>

				<Pagenation
					prevText={prevPost.title}
					prevUrl={`/contents/${prevPost.slug}`}
					nextText={nextPost.title}
					nextUrl={`/contents/${nextPost.slug}`}
				/>
			</article>
		</Container>
	)
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const allSlugs = await getAllSlugs()
	return {
		// i18n 有効時、文字列 paths はデフォルトロケール分しか生成されないため
		// 全ロケール × 全スラッグをオブジェクト形式で列挙する
		paths: allSlugs.flatMap(({ slug }) =>
			(locales ?? []).map((locale) => ({ params: { slug }, locale })),
		),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<PostPageProps> = async (context) => {
	const slug = context.params?.slug as string
	const post = await getPostBySlug(slug)
	if (!post) {
		return { notFound: true }
	} else {
		// null合体演算子(eyecatcxhがnullであれば、eyecatchLocal)
		const eyecatch = post.eyecatch ?? eyecatchLocal

		// eyecatch画像のURLからbase64エンコードされたぼかしプレースホルダー画像を生成
		// const { base64 } = await getPlaiceholder(post.eyecatch.url)
		// post.eyecatch.blurDataURL = base64

		const description = extractText(post.content)

		const allSlugs = await getAllSlugs()
		// 現在の投稿のスラグを使用して、前後の投稿情報を取得する
		const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

		return {
			props: {
				title: post.title,
				publish: post.publishDate,
				content: post.content,
				eyecatch: eyecatch,
				categories: post.categories,
				description: description,
				prevPost: prevPost,
				nextPost: nextPost,
			},
		}
	}
}
