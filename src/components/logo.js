import Link from "next/link";
import styles from "src/styles/logo.module.css"

export default function Logo({ boxOn = false }) {
	return (
		<Link href="/">
			<span className={boxOn ? styles.box : styles.basic}>Umaso</span>
		</Link>
	);
}
