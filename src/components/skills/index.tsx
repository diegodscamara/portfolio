import { Container, Section, Title } from './styles'

import { Button } from '../../components/button'

const stack = [
	{
		name: 'HTML5',
		icon: '/images/stack/html5.png',
	},
	{
		name: 'JavaScript',
		icon: '/images/stack/javascript.png',
	},
	{
		name: 'Typescript',
		icon: '/images/stack/typescript.png',
	},
	{
		name: 'ReactJS',
		icon: '/images/stack/reactjs.png',
	},
	{
		name: 'NextJS',
		icon: '/images/stack/nextjs.png',
	},
	{
		name: 'Knockout',
		icon: '/images/stack/knockout.png',
	},
	{
		name: 'NodeJS',
		icon: '/images/stack/nodejs.png',
	},
	{
		name: 'C# (CSharp)',
		icon: '/images/stack/csharp.png',
	},
	{
		name: 'Figma',
		icon: '/images/stack/figma.png',
	},
	{
		name: 'CSS3',
		icon: '/images/stack/css3.png',
	},
	{
		name: 'Less.js',
		icon: '/images/stack/lessjs.png',
	},
	{
		name: 'Sass',
		icon: '/images/stack/sass.png',
	},
	{
		name: 'Bootstrap',
		icon: '/images/stack/bootstrap.png',
	},
	{
		name: 'Tailwind CSS',
		icon: '/images/stack/tailwindcss.png',
	},
	{
		name: 'Material UI',
		icon: '/images/stack/materialui.png',
	},
	{
		name: 'GraphQL',
		icon: '/images/stack/graphql.png',
	},
	{
		name: 'Jest',
		icon: '/images/stack/jest.png',
	},
	{
		name: 'GitHub',
		icon: '/images/stack/github.png',
	},
	{
		name: 'GitLab',
		icon: '/images/stack/gitlab.png',
	},
	{
		name: 'Git',
		icon: '/images/stack/git.png',
	},
	{
		name: 'Azure DevOps',
		icon: '/images/stack/azure.png',
	},
	// Add more technologies here as needed
]

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
export function Skills(): JSX.Element {
	return (
		<Section id='Skills'>
			<Title>Skills</Title>
			<Container>
				{stack.map((item, index) => (
					<Button variant='skill' key={index}>
						<img src={item.icon} width={24} height={24} alt={item.name} />
						{item.name}
					</Button>
				))}
			</Container>
		</Section>
	)
}
