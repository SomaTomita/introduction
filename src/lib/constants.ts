import type { SiteMeta, Eyecatch } from 'src/types'
import type { Locale } from './i18n'

export const siteMetaByLocale: Record<Locale, SiteMeta> = {
	ja: {
		siteTitle: 'Intro',
		siteDesc: 'アウトプットしていくサイト',
		siteUrl: 'https://*********',
		siteLang: 'ja',
		siteLocale: 'ja_JP',
		siteType: 'website',
		siteIcon: '/favicon.png',
	},
	en: {
		siteTitle: 'Intro',
		siteDesc: 'A portfolio site where I share my output',
		siteUrl: 'https://*********',
		siteLang: 'en',
		siteLocale: 'en_US',
		siteType: 'website',
		siteIcon: '/favicon.png',
	},
}

export const eyecatchLocal: Eyecatch = {
	url: '/eyecatch.jpg',
	width: 1920,
	height: 1280,
}
