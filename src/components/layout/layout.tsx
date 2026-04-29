import type { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'
import Container from './container'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Header />

			<main>
				<Container>{children}</Container>
			</main>

			<Footer />
		</>
	)
}
