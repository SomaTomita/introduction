import Link from "next/link"

export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/"><a>Home</a></Link>
				</li>
				<li>
					<Link href="/"><a>About</a></Link>
				</li>
				<li>
					<Link href="/"><a>Blog</a></Link>
				</li>

			</ul>
		</nav>
	)
}