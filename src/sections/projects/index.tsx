import { Container, Title, Wrapper } from './styles'

import { Card } from '../../components/card'
import { Carousel } from '../../components/carousel'
import { ProjectsData } from './data'

/**
 * Creates a React component that renders a list of projects as a carousel.
 *
 * @return {JSX.Element} A React component that renders a list of projects.
 */
export function Projects(): JSX.Element {
	return (
		<Wrapper id='Projects'>
			<Title>Projects</Title>
			<Container>
				<Carousel
					data={ProjectsData().map((project) => (
						<Card key={project.name} project={project} />
					))}
				/>
			</Container>
		</Wrapper>
	)
}
