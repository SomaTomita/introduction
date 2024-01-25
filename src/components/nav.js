import Link from "next/link"
import styles from "../styles/nav.module.css"

export default function Nav() {
	return (
		<nav>
			<ul className={styles.list}>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contents">Contents</Link>
				</li>
			</ul>
		</nav>
	)
}
