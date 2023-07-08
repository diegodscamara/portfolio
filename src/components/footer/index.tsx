import { Content, Icons, Name, Section } from './styles'

import { ReactElement } from 'react'

type IconsProps = {
	src: string
	alt: string
	link: string
}

const icons: IconsProps[] = [
	{
		src: '/icons/linkedin.svg',
		alt: 'Linkedin',
		link: 'https://www.linkedin.com/in/diegodscamara/',
	},
	{
		src: '/icons/github.svg',
		alt: 'GitHub',
		link: 'https://github.com/diegodscamara',
	},
	{
		src: '/icons/email.svg',
		alt: 'Email',
		link: 'mailto:diegodscamara@gmail.com',
	},
]

/**
 * Renders the Footer component.
 *
 * @return {ReactElement} The rendered Footer component.
 */
export function Footer(): ReactElement {
	return (
		<Section id='footer'>
			<Content>
				Made by <Name>Diego Câmara</Name> - Copyright &copy;{' '}
				{new Date().getFullYear()}
			</Content>
			<Icons>
				{icons.map((icon) => (
					<a
						href={icon.link}
						key={icon.alt}
						title={icon.alt}
						aria-label={icon.alt}
						target='_blank'>
						<img src={icon.src} alt={icon.alt} width={24} height={24} />
					</a>
				))}
			</Icons>
		</Section>
	)
}
