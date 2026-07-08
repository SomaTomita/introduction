// NOTE: next.config.mjs の i18n.locales / defaultLocale と必ず同期させること
export const LOCALES = ['ja', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en'

export function isLocale(value: unknown): value is Locale {
	return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

// router.locale は string | undefined なので、必ずこの関数を通して Locale に絞り込む
export function resolveLocale(value: string | undefined): Locale {
	return isLocale(value) ? value : DEFAULT_LOCALE
}

// canonical / hreflang 用の URL パス生成(Next のルーティング自体はこれを使わない)
export function localizePath(path: string, locale: Locale): string {
	if (locale === DEFAULT_LOCALE) {
		return path
	}
	return path === '/' ? `/${locale}` : `/${locale}${path}`
}
