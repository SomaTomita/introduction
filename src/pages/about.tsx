import Container from 'src/components/layout/container'
import Hero from 'src/components/hero'
import PostBody from 'src/components/post/post-body'
import Contact from 'src/components/contact'
import TwoColumn, { TwoColumnMain, TwoColumnSidebar } from '../components/layout/two-column'
import Image from 'next/image'
import eyecatch from '../images/about_pug_1920*960.png'
import Meta from '../components/meta'
import { useDictionary } from 'src/lib/use-dictionary'
import { aboutLastUpdated } from 'src/lib/dictionary'
import { resolveLocale } from 'src/lib/i18n'
import { useRouter } from 'next/router'
import { parseISO, format } from 'date-fns'
import { ja, enUS } from 'date-fns/locale'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import styles from 'src/styles/about.module.css'

const dateLocale = { ja, en: enUS } as const
const datePattern = { ja: 'yyyy年MM月dd日', en: 'MMMM d, yyyy' } as const

export default function About() {
	const { about } = useDictionary()
	const locale = resolveLocale(useRouter().locale)
	const updatedLabel = format(parseISO(aboutLastUpdated), datePattern[locale], {
		locale: dateLocale[locale],
	})

	return (
		<Container>
			<Meta
				pageTitle={about.pageTitle}
				pageDesc={about.pageDesc}
				pageImg={eyecatch.src}
				// eyecatchから高さと横幅を取り出して指定
				pageImgW={eyecatch.width}
				pageImgH={eyecatch.height}
			/>

			<Hero title="About" subtitle="Comment" />

			<figure>
				<Image
					src={eyecatch}
					alt=""
					layout="responsive"
					sizes="(min-width: 1152px) 1152px, 100vw"
					priority
					placeholder="blur"
				/>
			</figure>
			<TwoColumn>
				<TwoColumnMain>
					{' '}
					{/* 本文 */}
					<PostBody>
						{about.body.map((block, index) => {
							if (block.tag === 'h2') {
								return <h2 key={index}>{block.text}</h2>
							}
							if (block.tag === 'h3') {
								return <h3 key={index}>{block.text}</h3>
							}
							return <p key={index}>{block.text}</p>
						})}
					</PostBody>
					{/* 最終更新日(dictionary.ts の aboutLastUpdated を手で更新する) */}
					<p className={styles.updated}>
						<FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
						<span>
							{about.lastUpdatedLabel} <time dateTime={aboutLastUpdated}>{updatedLabel}</time>
						</span>
					</p>
				</TwoColumnMain>
				<TwoColumnSidebar>
					{' '}
					{/* コンタクト情報 */}
					<Contact />
				</TwoColumnSidebar>
			</TwoColumn>
		</Container>
	)
}
