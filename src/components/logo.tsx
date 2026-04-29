import Link from 'next/link'
import styles from 'src/styles/logo.module.css'

interface LogoProps {
	boxOn?: boolean
}

export default function Logo({ boxOn = false }: LogoProps) {
	return (
		<Link href="/">
			<span className={boxOn ? styles.box : styles.basic}>Umaso</span>
		</Link>
	)
}
