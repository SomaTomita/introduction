import Head from 'next/head'
import { useRouter } from 'next/router'
import { DEFAULT_LOCALE, LOCALES, localizePath, resolveLocale } from 'src/lib/i18n'
import { siteMetaByLocale } from '../lib/constants'

// 汎用OGP画像
import siteImg from '../images/ogp.png'

interface MetaProps {
	pageTitle?: string
	pageDesc?: string
	pageImg?: string
	pageImgW?: number
	pageImgH?: number
}

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }: MetaProps) {
	const router = useRouter()
	const locale = resolveLocale(router.locale)
	const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMetaByLocale[locale]

	// ページのタイトル
	const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle

	// ページの説明
	const desc = pageDesc ?? siteDesc

	// ページのURL(router.asPath にはロケールプレフィックスが含まれないため付与する)
	const url = `${siteUrl}${localizePath(router.asPath, locale)}`

	// OGP画像
	const img = pageImg || siteImg.src
	const imgW = pageImgW || siteImg.width
	const imgH = pageImgH || siteImg.height
	const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`

	return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="description" content={desc} />
			<meta property="og:description" content={desc} />
			<link rel="canonical" href={url} />
			{LOCALES.map((altLocale) => (
				<link
					key={altLocale}
					rel="alternate"
					hrefLang={altLocale}
					href={`${siteUrl}${localizePath(router.asPath, altLocale)}`}
				/>
			))}
			<link
				rel="alternate"
				hrefLang="x-default"
				href={`${siteUrl}${localizePath(router.asPath, DEFAULT_LOCALE)}`}
			/>
			<meta property="og:url" content={url} />
			<meta property="og:site_name" content={siteTitle} />
			<meta property="og:type" content={siteType} /> {/* コンテンツの種類 */}
			<meta property="og:locale" content={siteLocale} />
			<link rel="icon" href={siteIcon} />
			<link rel="apple-touch-icon" href={siteIcon} />
			<meta property="og:image" content={imgUrl} />
			<meta property="og:image:width" content={String(imgW)} />
			<meta property="og:image:height" content={String(imgH)} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	)
}
