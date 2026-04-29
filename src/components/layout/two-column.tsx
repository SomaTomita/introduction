import type { ReactNode } from 'react'
import styles from 'src/styles/two-column.module.css'

interface TwoColumnProps {
	children: ReactNode
}

export default function TwoColumn({ children }: TwoColumnProps) {
	return <div className={styles.flexContainer}>{children}</div>
}

export function TwoColumnMain({ children }: TwoColumnProps) {
	return <div className={styles.main}>{children}</div>
}

export function TwoColumnSidebar({ children }: TwoColumnProps) {
	return <div className={styles.sidebar}>{children}</div>
}
