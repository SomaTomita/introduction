import styles from "src/styles/post-body.module.css"

export default function PostBody({ children }) {
	return (
		<div className={styles.stack}>
			{children}
		</div>
	)
}