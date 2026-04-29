import type { ReactNode } from 'react'
import styles from 'src/styles/post-body.module.css'

interface PostBodyProps {
	children: ReactNode
}

export default function PostBody({ children }: PostBodyProps) {
	return <div className={styles.stack}>{children}</div>
}
