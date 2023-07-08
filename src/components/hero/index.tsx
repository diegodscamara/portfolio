import {
	Column,
	Container,
	ScrollLink,
	Subtitle,
	Title,
	Wrapper,
} from './styles'

import { Button } from '../../components/button'

/**
 * Renders the Hero component.
 *
 * @return {JSX.Element} The rendered Hero component.
 */
export function Hero(): JSX.Element {
	return (
		<Wrapper id='Home'>
			<Container>
				<Column>
					<Title>
						Hi, I&apos;m Diego Câmara
						<br />
						A Front End Developer
						<br />
						Based in Montreal
					</Title>
					<Subtitle>
						I help businesses and companies reach
						<br />
						their goals by designing and developing
						<br />
						user-centric web applications
					</Subtitle>
					<Button variant='filled'>
						<a href='#Contact' title='Get in touch'>
							Get in touch
						</a>
					</Button>
				</Column>

				<Column>
					<img
						src='/images/avatar.svg'
						alt='Diego Câmara'
						width={420}
						height={420}></img>
				</Column>
			</Container>

			<a href='#About' title='Scroll down' aria-label='Scroll down'>
				<ScrollLink>
					<img src='/icons/scroll-down-icon.svg' />
				</ScrollLink>
			</a>
		</Wrapper>
	)
}
