import { About } from './components/about'
import { Contact } from './components/contact'
import { Experience } from './components/experience'
import { Footer } from './components/footer'
import { GlobalStyle } from './globalStyles'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { Skills } from './components/skills'
import { ThemeProvider } from './ThemeContext'

export function App(): JSX.Element {
	return (
		<ThemeProvider>
			<AppContent />
		</ThemeProvider>
	)
}

function AppContent(): JSX.Element {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Hero />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	)
}
