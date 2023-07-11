import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'

import { AudioContext } from '../context/AudioContext'
import { PlayAudio } from '../components/play-audio'

type Theme = 'light' | 'dark'

type ThemeContextType = {
	theme: Theme
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
	theme: 'dark',
	toggleTheme() {
		return
	},
})

interface ThemeProviderProps {
	children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const preferredTheme = localStorage.getItem('theme') as Theme | null
		if (preferredTheme) {
			return preferredTheme
		} else {
			const prefersDarkMode =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			return prefersDarkMode ? 'dark' : 'light'
		}
	})

	const { audio } = useContext(AudioContext)

	useEffect(() => {
		localStorage.setItem('theme', theme)
	}, [theme])

	useEffect(() => {
		document.body.classList.add(theme)
		return () => {
			document.body.classList.remove(theme)
		}
	}, [theme])

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
		audio === 'on' && PlayAudio({ file: '/sounds/switch.wav' })
	}

	const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme])

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	)
}
