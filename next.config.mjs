/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// NOTE: src/lib/i18n.ts の LOCALES / DEFAULT_LOCALE と必ず同期させること
	i18n: {
		locales: ['ja', 'en'],
		defaultLocale: 'en',
		// Accept-Language による自動リダイレクトはしない(切り替えは UI から明示操作のみ)
		localeDetection: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.microcms-assets.io',
			},
		],
	},
}

export default nextConfig
