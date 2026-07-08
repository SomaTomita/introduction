import type { Locale } from './i18n'

interface AboutBodyBlock {
	tag: 'p' | 'h2' | 'h3'
	text: string
}

// About ページの「最終更新」日(ISO)。内容を直したらこの1行だけ手で更新する。
export const aboutLastUpdated = '2026-07-08'

export interface Dictionary {
	about: {
		pageTitle: string
		pageDesc: string
		lastUpdatedLabel: string
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

const ja: Dictionary = {
	about: {
		pageTitle: 'アバウト',
		pageDesc: 'Soma Tomita について。関西でソフトウェアをつくったり、いろんなものに寄り道したり。',
		lastUpdatedLabel: '最終更新',
		body: [
			{
				tag: 'p',
				text: 'はじめまして、Soma Tomita です。関西でソフトウェアを書いて暮らしています。趣味はたくさんありますが、最近はもっぱら個人開発に時間を使っています。',
			},
			{ tag: 'h2', text: '好きなもの、たくさん' },
			{
				tag: 'p',
				text: '興味の幅が広くて、正直まとまりがありません。ジムで筋トレ、機会があればサウナやゴルフ。うまいラーメンと静かな居酒屋をめぐって、週末が許すかぎり温泉に浸かる。MARVEL映画とミュージカル、量が多すぎるアニメ、K-pop や Hiphop、最近はまっているテクノやトランス、サッカー、スニーカー、カラオケ、頂上の景色めあてのハイキング、それに歴史館や美術館めぐり。どれもないときは、本か podcast、呆れるほどの回数のクラロワや最近はじめたポケモンチャンピオンズ、あるいは謝る気のない昼寝です。',
			},
			{ tag: 'h2', text: '旅のこと' },
			{
				tag: 'p',
				text: 'これまでに足を運んだのは 🇺🇸🇬🇺🇰🇷🇸🇬🇵🇭🇱🇦🇹🇭🇫🇮🇦🇹🇸🇰🇮🇳🇭🇰🇩🇪🇳🇱🇲🇾🇨🇳 の 16 か国ほど。その多くは旅行ではなく、留学やインターン、語学プログラムなど、腰を据えて「その土地で人がどう暮らしているのか」を見にいったものがほとんどです。純粋に遊びで行ったのは、ドイツ、オランダ、韓国、香港、中国など。どちらにしても、新しい場所へ行きたい気持ちは消えていなくて、次にどこへ行き着くのか、自分でもちょっと楽しみにしています。',
			},
			{ tag: 'h2', text: 'ものをつくるようになるまで' },
			{
				tag: 'p',
				text: 'エンジニアには一直線で来たわけではありません。学んだのは経済学で、大学時代は講義室よりも SDGs や教育のプロジェクトに時間を使い、コードを本格的に書く前は国際物流の仕事をしていました。いまは教育分野のプロダクトをフルスタックで開発していて、その途中で英国 University of York の情報科学の修士も終えました。この遠回りこそが自分らしいのだと思います。ソフトウェアでも、まだ見ぬ土地でも、変えにいく前に「なぜそうなっているのか」を知りたくなる性分です。',
			},
			{
				tag: 'p',
				text: 'このサイトは、つくったものや、いま頭の中でこねているものを置いておく場所です。立ち寄ってくれてありがとうございます。上のどれかがあなたの「好きなもの」と重なっていたら、なおうれしいです。',
			},
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
		pageDesc:
			'About Soma Tomita, a Kansai-based software engineer who is curious about a little too much.',
		lastUpdatedLabel: 'Last updated',
		body: [
			{
				tag: 'p',
				text: "Hi, I'm Soma Tomita. I write software for a living in Kansai. I have plenty of hobbies, but lately most of my free time goes into personal projects.",
			},
			{ tag: 'h2', text: "Things I'm into" },
			{
				tag: 'p',
				text: 'The list is long and a little all over the place. Lifting at the gym, plus sauna and golf when I get the chance. Chasing good ramen and quiet izakaya, and soaking in as many hot springs as a weekend allows. Marvel films and musicals, far too much anime, K-pop and hip-hop with a recent detour into techno and trance, football, sneakers, karaoke, hiking for the view at the top, and wandering through history and art museums. When none of that is happening, a book, a podcast, an absurd number of Clash Royale matches, my newly started Pokémon Champions habit, or a nap I refuse to apologize for.',
			},
			{ tag: 'h2', text: 'Travel' },
			{
				tag: 'p',
				text: "So far that's 🇺🇸🇬🇺🇰🇷🇸🇬🇵🇭🇱🇦🇹🇭🇫🇮🇦🇹🇸🇰🇮🇳🇭🇰🇩🇪🇳🇱🇲🇾🇨🇳, sixteen or so countries, though not many of them were holidays. Most were study abroad, internships, and language programs, going somewhere with a reason to stay a while and see how people actually live day to day. The trips that were purely for fun were places like Germany, the Netherlands, Korea, Hong Kong, and China. Either way, the urge to go somewhere new has not gone away, so I stay a little curious about where I might end up next.",
			},
			{ tag: 'h2', text: 'How I ended up building things' },
			{
				tag: 'p',
				text: "I did not take a straight line into engineering. I studied economics, spent more of university on SDGs and education projects than in lecture halls, and worked in international logistics before I wrote code seriously. These days I build full-stack products in education technology, and I finished a computer science master's at the University of York in the UK along the way. The winding route is kind of the point. I like to understand why something works before I try to change it, whether that is a piece of software or a place I have never been.",
			},
			{
				tag: 'p',
				text: "This site is where I keep the things I make and the things I'm still chewing on. Thanks for stopping by, and if any of the above overlaps with your own list, even better.",
			},
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
