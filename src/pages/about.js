import Container from "src/components/container";
import Hero from "src/components/hero";
import PostBody from "src/components/post-body";

export default function About() {
	return (
		<Container>
			<Hero title="About" subtitle="Comment" />

			<PostBody>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatibus commodi inventore a esse asperiores voluptate quasi ratione saepe minus eligendi ab veritatis suscipit repellat assumenda cumque nam, quidem pariatur!</p>
				<h2>pug pug pug</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
				<h3>pug pug pug</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet architecto alias quaerat, quod error, iste fugit totam aliquid cum magni explicabo eius delectus earum dolor assumenda nemo similique odit?</p>
			</PostBody>
		</Container>
	)
}