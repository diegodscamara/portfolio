import { About } from './components/about'
import { Contact } from './components/contact'
import { Experience } from './components/experience'
import { Footer } from './components/footer'
import { Fragment } from 'react'
import GlobalStyle from './globalStyles'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
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
