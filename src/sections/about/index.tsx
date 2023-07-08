import { Content, Description, Header, Title, Wrapper } from './styles'

import { Button } from '../../components/button'

/**
 * Renders the About component.
 *
 * @return {JSX.Element} The rendered About component.
 */
export function About(): JSX.Element {
	return (
		<Wrapper id='About'>
			<img src='src/assets/images/about.svg' alt='Front End Developer' />
			<Content>
				<Header>
					<img src='src/assets/icons/fast-arrow-right.svg' alt='Fast arrow' />
					<Title>About Me</Title>
				</Header>
				<Description>
					As a Front End Developer, I have a passion for creating user-friendly
					interfaces using technologies such as ReactJS, NextJS, JavaScript,
					TypeScript, HTML, CSS, and my design skills extend beyond coding, as
					I&apos;m proficient in Figma to bring my visions to life. I integrate
					frontend systems with content management systems and have experience
					with both GraphQL and REST APIs. With expertise in Scrum, Kanban,
					Agile, and code versioning tools.
					<br />
					<br />
					Additionally, I am proactive, skilled in conflict resolution, possess
					strong analytical and problem-solving skills, and have excellent
					communication skills that ensure project success. I work
					collaboratively as part of a team and mentor junior developers, while
					also dedicating myself to continuous improvement and making web
					applications more efficient as I&apos;m always exploring new
					technologies to stay ahead of the curve.
				</Description>
				<Button variant='outlined'>
					<a
						href='src/assets/documents/resume.pdf'
						target='_blank'
						rel='noopener noreferrer'
						title='Open resume in new tab'>
						Download resume
						<img src='src/assets/icons/download.svg' alt='Download' />
					</a>
				</Button>
			</Content>
		</Wrapper>
	)
}
