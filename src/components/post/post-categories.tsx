import styles from 'src/styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import type { Category } from 'src/types'

interface PostCategoriesProps {
	categories: Category | Category[]
}

export default function PostCategories({ categories }: PostCategoriesProps) {
	// 配列のtrue or false
	const categoriesArr = Array.isArray(categories) ? categories : [categories]

	return (
		<div className={styles.flexContainer}>
			<h3 className={styles.heading}>
				<FontAwesomeIcon icon={faFolderOpen} />
				<span className="sr-only">Categories</span>
			</h3>
			<ul className={styles.list}>
				{categoriesArr.map(({ name, slug }) => (
					<li key={slug}>
						<Link href={`/contents/${slug}`}>{name}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}
