import styles from "src/styles/hero.module.css"
import Image from "next/image"
import pug from "../images/hero_pug-1500*1300.png"

export default function Hero({ title, subtitle, imageOn = false }) {
	return (
		<div className={styles.flexContainer}>
			<div className={styles.text}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
			{imageOn && (
				<figure className={styles.image}>
					<Image
						src={pug}
						alt=""
						layout="responsive"
						// 文字も含むコンテナの横幅は最大1152px / 画像は最大576(コンテナの50%)
						sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
						priority
						placeholder="blur"
					/>
				</figure>
			)}
		</div>
	)
}
