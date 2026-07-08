import Link from 'next/link'
import { useRouter } from 'next/router'
import { LOCALES, resolveLocale, type Locale } from 'src/lib/i18n'
import styles from 'src/styles/lang-switcher.module.css'

const LABELS: Record<Locale, string> = {
	ja: 'JA',
	en: 'EN',
}

export default function LangSwitcher() {
	const router = useRouter()
	const current = resolveLocale(router.locale)

	return (
		<ul className={styles.list}>
			{LOCALES.map((locale) => (
				<li key={locale}>
					{locale === current ? (
						<span className={styles.current} aria-current="true">
							{LABELS[locale]}
						</span>
					) : (
						// href は asPath のまま、locale プロパティでプレフィックスを切り替える
						<Link href={router.asPath} locale={locale} hrefLang={locale}>
							{LABELS[locale]}
						</Link>
					)}
				</li>
			))}
		</ul>
	)
}
