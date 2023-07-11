import { ThemeContext } from '../../context/ThemeContext'
import { ThemeIcon } from './styles'
import { useContext } from 'react'

export function ThemeToggle() {
	const { theme, toggleTheme } = useContext(ThemeContext)

	return (
		<ThemeIcon onClick={toggleTheme}>
			<img
				src={
					theme === 'light' ? '/icons/dark-mode.svg' : '/icons/light-mode.svg'
				}
				title={theme === 'light' ? 'Dark mode' : 'Light mode'}
			/>
		</ThemeIcon>
	)
}