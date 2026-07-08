import { describe, expect, it } from 'vitest'
import { DEFAULT_LOCALE, LOCALES, localizePath, resolveLocale } from './i18n'

describe('LOCALES', () => {
	it('ja と en の2ロケールで、デフォルトは en', () => {
		expect(LOCALES).toEqual(['ja', 'en'])
		expect(DEFAULT_LOCALE).toBe('en')
	})
})

describe('resolveLocale', () => {
	it('既知のロケール文字列はそのまま返す', () => {
		expect(resolveLocale('en')).toBe('en')
		expect(resolveLocale('ja')).toBe('ja')
	})

	it('undefined は en にフォールバックする(i18n 無効時の router.locale)', () => {
		expect(resolveLocale(undefined)).toBe('en')
	})

	it('未知の値は en にフォールバックする', () => {
		expect(resolveLocale('fr')).toBe('en')
	})
})

describe('localizePath', () => {
	it('デフォルトロケールはプレフィックスなし', () => {
		expect(localizePath('/about', 'en')).toBe('/about')
		expect(localizePath('/', 'en')).toBe('/')
	})

	it('ja は /ja プレフィックスを付ける', () => {
		expect(localizePath('/about', 'ja')).toBe('/ja/about')
		expect(localizePath('/contents/some-slug', 'ja')).toBe('/ja/contents/some-slug')
	})

	it('ルートパスは末尾スラッシュを残さない', () => {
		expect(localizePath('/', 'ja')).toBe('/ja')
	})
})
