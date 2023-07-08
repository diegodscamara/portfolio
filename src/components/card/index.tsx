import { Container, Content, Description, Header, Tag, Title } from './styles'

import { Button } from '../button'

interface Project {
	thumbnail: string
	name: string
	description: string
	link: string
	work: string
}

interface CardProps {
	project: Project
}

/**
 * Renders a card component for displaying projects.
 *
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} A React functional component that displays a card for the given project.
 */
export function Card({ project }: CardProps) {
	return (
		<Container>
			<img
				src={project.thumbnail}
				alt={project.name}
				width={600}
				height={350}
			/>
			<Tag>{project.work}</Tag>
			<Content>
				<Header>
					<Title>{project.name}</Title>
					<Description>{project.description}</Description>
				</Header>
				<Button variant='inline'>
					<a
						href={project.link}
						aria-label='Visit site'
						title='Visit site'
						target='_blank'>
						Visit site
						<img
							src='src/assets/icons/arrow-right.svg'
							alt='Arrow right'
							width={16}
							height={16}
						/>
					</a>
				</Button>
			</Content>
		</Container>
	)
}
