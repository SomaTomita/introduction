export default function prevNextPost(allSlugs, currentSlug) {
	const index = allSlugs.findIndex(
		({ slug }) => slug === currentSlug,
	)

	const numberOfAllPosts = allSlugs.length
	// 現在の投稿が配列のindexが最後の場合、空のオブジェクト、最後でなければ前のindex
	const prevPost = index + 1 === numberOfAllPosts
		? { title: '', slug: '' }
		: allSlugs[index + 1]
	// 現在の投稿が配列のindexが最初場合、空のオブジェクト
	const nextPost = index === 0
		? { title: '', slug: '' }
		: allSlugs[index - 1]

	return [prevPost, nextPost]
}
