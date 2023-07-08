import { Container, Section, Title } from './styles'

import { Button } from '../../components/button'

const stack = [
	{
		name: 'HTML5',
		icon: 'src/assets/images/stack/html5.png',
	},
	{
		name: 'JavaScript',
		icon: 'src/assets/images/stack/javascript.png',
	},
	{
		name: 'Typescript',
		icon: 'src/assets/images/stack/typescript.png',
	},
	{
		name: 'ReactJS',
		icon: 'src/assets/images/stack/reactjs.png',
	},
	{
		name: 'NextJS',
		icon: 'src/assets/images/stack/nextjs.png',
	},
	{
		name: 'Knockout',
		icon: 'src/assets/images/stack/knockout.png',
	},
	{
		name: 'NodeJS',
		icon: 'src/assets/images/stack/nodejs.png',
	},
	{
		name: 'C# (CSharp)',
		icon: 'src/assets/images/stack/csharp.png',
	},
	{
		name: 'Figma',
		icon: 'src/assets/images/stack/figma.png',
	},
	{
		name: 'CSS3',
		icon: 'src/assets/images/stack/css3.png',
	},
	{
		name: 'Less.js',
		icon: 'src/assets/images/stack/lessjs.png',
	},
	{
		name: 'Sass',
		icon: 'src/assets/images/stack/sass.png',
	},
	{
		name: 'Bootstrap',
		icon: 'src/assets/images/stack/bootstrap.png',
	},
	{
		name: 'Tailwind CSS',
		icon: 'src/assets/images/stack/tailwindcss.png',
	},
	{
		name: 'Material UI',
		icon: 'src/assets/images/stack/materialui.png',
	},
	{
		name: 'GraphQL',
		icon: 'src/assets/images/stack/graphql.png',
	},
	{
		name: 'Jest',
		icon: 'src/assets/images/stack/jest.png',
	},
	{
		name: 'GitHub',
		icon: 'src/assets/images/stack/github.png',
	},
	{
		name: 'GitLab',
		icon: 'src/assets/images/stack/gitlab.png',
	},
	{
		name: 'Git',
		icon: 'src/assets/images/stack/git.png',
	},
	{
		name: 'Azure DevOps',
		icon: 'src/assets/images/stack/azure.png',
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
