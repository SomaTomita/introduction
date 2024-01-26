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
