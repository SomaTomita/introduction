import { describe, expect, it } from 'vitest'
import { siteMetaByLocale } from './constants'

describe('siteMetaByLocale', () => {
	it('ja は現行の siteMeta と同じ値を持つ', () => {
		expect(siteMetaByLocale.ja.siteLang).toBe('ja')
		expect(siteMetaByLocale.ja.siteLocale).toBe('ja_JP')
		expect(siteMetaByLocale.ja.siteDesc).toBe('アウトプットしていくサイト')
	})

	it('en は英語ロケール情報を持つ', () => {
		expect(siteMetaByLocale.en.siteLang).toBe('en')
		expect(siteMetaByLocale.en.siteLocale).toBe('en_US')
	})

	it('ロケール非依存の値は ja/en で一致する', () => {
		expect(siteMetaByLocale.en.siteTitle).toBe(siteMetaByLocale.ja.siteTitle)
		expect(siteMetaByLocale.en.siteUrl).toBe(siteMetaByLocale.ja.siteUrl)
		expect(siteMetaByLocale.en.siteIcon).toBe(siteMetaByLocale.ja.siteIcon)
	})
})
