import Container from './container'
import Logo from '../logo'
import Nav from '../nav'
import LangSwitcher from '../lang-switcher'
import styles from 'src/styles/header.module.css'

export default function Header() {
	return (
		<header>
			<Container large>
				<div className={styles.flexContainer}>
					<Logo boxOn />
					<div className={styles.navGroup}>
						<LangSwitcher />
						<Nav />
					</div>
				</div>
			</Container>
		</header>
	)
}
