import { client } from "../../lib/api";

export default function Schedule() {
	return <h1>テスト</h1>
}

export async function getStaticProps() {
	const resPromise = client.get({ endpoint: "contents", })
	try {
		const res = await resPromise
		console.log(res);
	} catch (err) {
		console.log(err);
	}

	return {
		props: {},
	}
}
