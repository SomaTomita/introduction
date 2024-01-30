import styles from "src/styles/contact.module.css"
import Social from "./social"

export default function Contact() {
	return (
		<div className={styles.stack}>
			<h3 className={styles.heading}>Contact</h3>
			<Social iconSize="30px" />
			<address>umasotest27@gmail.com</address>
		</div>
	)
}