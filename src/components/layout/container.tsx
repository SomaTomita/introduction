import type { ReactNode } from 'react'
import styles from 'src/styles/container.module.css'

interface ContainerProps {
	children: ReactNode
	large?: boolean
}

export default function Container({ children, large = false }: ContainerProps) {
	return <div className={large ? styles.large : styles.default}>{children}</div>
}
