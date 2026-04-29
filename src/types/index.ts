export interface Eyecatch {
	url: string
	width: number
	height: number
	blurDataURL?: string
}

export interface Category {
	name: string
	id: string
	slug: string
}

export interface Post {
	title: string
	slug: string
	eyecatch?: Eyecatch
	content: string
	publishDate: string
	categories: Category[]
}

export interface PostListItem {
	title: string
	slug: string
	eyecatch: Eyecatch
}

export interface SlugEntry {
	title: string
	slug: string
}

export interface SiteMeta {
	siteTitle: string
	siteDesc: string
	siteUrl: string
	siteLang: string
	siteLocale: string
	siteType: string
	siteIcon: string
}
