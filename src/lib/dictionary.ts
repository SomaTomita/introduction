import type { Locale } from './i18n'

interface AboutBodyBlock {
	tag: 'p' | 'h2' | 'h3'
	text: string
}

export interface Dictionary {
	about: {
		pageTitle: string
		pageDesc: string
		body: ReadonlyArray<AboutBodyBlock>
	}
	posts: {
		pageTitle: string
		pageDesc: string
	}
	category: {
		pageDesc: (name: string) => string
	}
}

// ja の値は現行表示と完全一致させること(ja の見た目を変えない)
// about.body は現状プレースホルダー(lorem ipsum)。実文面は後で差し替える
const loremShort =
	'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?'

const ja: Dictionary = {
	about: {
		pageTitle: 'アバウト',
		pageDesc: "Who's Portfolio site?",
		body: [
			{
				tag: 'p',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus commodi inventore a esse asperiores voluptate quasi ratione saepe minus eligendi ab veritatis suscipit repellat assumenda cumque nam, quidem pariatur!',
			},
			{ tag: 'h2', text: 'pug pug pug' },
			{ tag: 'p', text: loremShort },
			{ tag: 'p', text: loremShort },
			{ tag: 'h3', text: 'pug pug pug' },
			{ tag: 'p', text: loremShort },
		],
	},
	posts: {
		pageTitle: 'ブログ',
		pageDesc: 'ブログの記事一覧',
	},
	category: {
		pageDesc: (name: string) => `${name}に関する記事`,
	},
}

const en: Dictionary = {
	about: {
		pageTitle: 'About',
		pageDesc: "Who's Portfolio site?",
		body: [
			{
				tag: 'p',
				text: 'Placeholder introduction in English. Replace with the real self-introduction copy.',
			},
			{ tag: 'h2', text: 'pug pug pug' },
			{ tag: 'p', text: 'Placeholder paragraph in English.' },
			{ tag: 'p', text: 'Placeholder paragraph in English.' },
			{ tag: 'h3', text: 'pug pug pug' },
			{ tag: 'p', text: 'Placeholder paragraph in English.' },
		],
	},
	posts: {
		pageTitle: 'Blog',
		pageDesc: 'All blog posts',
	},
	category: {
		pageDesc: (name: string) => `Posts about ${name}`,
	},
}

export const dictionaries: Record<Locale, Dictionary> = { ja, en }
