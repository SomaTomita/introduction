import Container from "./container"
import Logo from "src/components/logo"
import styles from "src/styles/footer.module.css"
import Social from "src/components/social"

export default function Footer() {
	return (
		<footer className={styles.wrapper}>
			<Container>
				<div className={styles.flexContainer}>
					<Logo />
					<Social />
				</div>
			</Container>
		</footer>
	)
}