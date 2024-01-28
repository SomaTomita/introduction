import styles from 'src/styles/pagenation.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, } from '@fortawesome/free-solid-svg-icons'

export default function Pagenation({
	prevText = '',
	prevUrl = '',
	nextText = '',
	nextUrl = '',
}) {
	return (
		<ul className={styles.flexContainer}>
			{/* prevTextとprevUrlが両方ともが存在する場合 <li>をレンダリング (真偽値値チェック) */}
			{/* prevNextPostで設定した次のindexがない場合は空オブジェクトになるので、false判定 */}
			{prevText && prevUrl && (
				<li className={styles.prev}>
					<Link href={prevUrl}>
						<span className={styles.iconText}>
							<FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
							<span>{prevText}</span>
						</span>
					</Link>
				</li>
			)}
			{nextText && nextUrl && (
				<li className={styles.next}>
					<Link href={nextUrl}>
						<span className={styles.iconText}>
							<span>{nextText}</span>
							<FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
						</span>
					</Link>
				</li>
			)}
		</ul>
	)
}
