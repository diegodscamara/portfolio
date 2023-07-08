import { About } from './sections/about'
import { Contact } from './sections/contact'
import { Experience } from './sections/experience'
import { Footer } from './sections/footer'
import { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import { Header } from './sections/header'
import { Hero } from './sections/hero'
import { Projects } from './sections/projects'
import { Skills } from './sections/skills'
/**
 * Renders the App component.
 *
 * @return {React.Element} The rendered React element.
 */
export function App(): JSX.Element {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</Fragment>
	)
}
