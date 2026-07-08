import { describe, expect, it } from 'vitest'
import { dictionaries } from './dictionary'

function keyPaths(value: unknown, prefix = ''): string[] {
	if (typeof value !== 'object' || value === null || Array.isArray(value)) {
		return [prefix]
	}
	return Object.entries(value).flatMap(([key, child]) =>
		keyPaths(child, prefix ? `${prefix}.${key}` : key),
	)
}

describe('dictionaries', () => {
	it('ja と en は同一のキー構造を持つ(訳し漏れ防止)', () => {
		expect(keyPaths(dictionaries.en).sort()).toEqual(keyPaths(dictionaries.ja).sort())
	})

	it('ja は現行の表示文字列を維持する', () => {
		expect(dictionaries.ja.about.pageTitle).toBe('アバウト')
		expect(dictionaries.ja.posts.pageTitle).toBe('ブログ')
		expect(dictionaries.ja.posts.pageDesc).toBe('ブログの記事一覧')
	})

	it('en は英語文字列を持つ', () => {
		expect(dictionaries.en.about.pageTitle).toBe('About')
		expect(dictionaries.en.posts.pageTitle).toBe('Blog')
	})

	it('category.pageDesc はカテゴリ名を埋め込む', () => {
		expect(dictionaries.ja.category.pageDesc('技術')).toBe('技術に関する記事')
		expect(dictionaries.en.category.pageDesc('Tech')).toBe('Posts about Tech')
	})

	it('about.body は段落構造を持つ', () => {
		for (const dict of [dictionaries.ja, dictionaries.en]) {
			expect(dict.about.body.length).toBeGreaterThan(0)
			for (const block of dict.about.body) {
				expect(['p', 'h2', 'h3']).toContain(block.tag)
				expect(block.text.length).toBeGreaterThan(0)
			}
		}
	})
})
