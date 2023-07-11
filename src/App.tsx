import { About } from './components/about'
import { AudioProvider } from './context/AudioContext'
import { Contact } from './components/contact'
import { Experience } from './components/experience'
import { Footer } from './components/footer'
import { GlobalStyle } from './globalStyles'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { Projects } from './components/projects'
import { ScrollToTop } from './components/scroll-to-top'
import { Skills } from './components/skills'
import { ThemeProvider } from './context/ThemeContext'

export function App(): JSX.Element {
	return (
		<AudioProvider>
			<ThemeProvider>
				<AppContent />
			</ThemeProvider>
		</AudioProvider>
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
			<ScrollToTop />
		</>
	)
}
