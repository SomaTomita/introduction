import Container from "src/components/layout/container";
import Hero from "src/components/hero";
import PostBody from "src/components/post/post-body";
import Contact from "src/components/contact";
import TwoColumn, { TwoColumnMain, TwoColumnSidebar } from "../components/layout/two-column";
import Image from "next/image"
import eyecatch from "../images/about_pug_1920*960.png"
import Meta from "../components/meta"

export default function About() {
	return (
		<Container>
			<Meta
				pageTitle="アバウト"
				pageDesc="Who's Portfolio site?"
				pageImg={eyecatch.src}
				// eyecatchから高さと横幅を取り出して指定
				pageImgW={eyecatch.width}
				pageImgH={eyecatch.height}
			/>

			<Hero title="About" subtitle="Comment" />

			<figure>
				<Image
					src={eyecatch}
					alt=""
					layout="responsive"
					sizes="(min-width: 1152px) 1152px, 100vw"
					priority
					placeholder="blur"
				/>
			</figure>
			<TwoColumn>
				<TwoColumnMain> {/* 本文 */}
					<PostBody>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus commodi inventore a esse asperiores voluptate quasi ratione saepe minus eligendi ab veritatis suscipit repellat assumenda cumque nam, quidem pariatur!</p>
						<h2>pug pug pug</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
						<h3>pug pug pug</h3>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
					</PostBody>
				</TwoColumnMain>
				<TwoColumnSidebar> {/* コンタクト情報 */}
					<Contact />
				</TwoColumnSidebar>
			</TwoColumn>
		</Container>
	)
}