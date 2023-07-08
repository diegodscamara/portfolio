import {
	Accordion,
	ArrowIcon,
	Company,
	Container,
	Content,
	Details,
	Intro,
	Location,
	Position,
	Responsibilities,
	Responsibility,
	Section,
	Summary,
	Title,
} from './styles'

import { Experiences } from './data'

type ExperienceData = {
	logo: string
	company: string
	details: string
	position: string
	intro: string
	responsibilities: string[]
}

/**
 * Renders the Experience component.
 *
 * @return {JSX.Element} The JSX representation of the Experience component.
 */
export function Experience(): JSX.Element {
	return (
		<Section id='Experience'>
			<Title>Experience</Title>
			<Accordion>
				{Experiences().map((experience: ExperienceData) => (
					<Details
						key={experience.company}
						open={experience.company === 'Genetec'}>
						<Summary>
							<Container>
								<img
									src={experience.logo}
									alt={experience.company}
									width={24}
									height={24}
								/>
								<Company>{experience.company}</Company>
								<Location>{experience.details}</Location>
							</Container>
							<ArrowIcon
								src='src/assets/icons/arrow-up.svg'
								alt='Toggle icon'
								title='Toggle experience'
								width={12}
								height={12}
							/>
						</Summary>
						<Content>
							<Position>{experience.position}</Position>
							<Intro>{experience.intro}</Intro>
							<Responsibilities>
								{experience.responsibilities.map((responsibility: string) => (
									<Responsibility key={responsibility}>
										{responsibility}
									</Responsibility>
								))}
							</Responsibilities>
						</Content>
					</Details>
				))}
			</Accordion>
		</Section>
	)
}
