import { AudioContext } from '../../../context/AudioContext'
import { MenuButtonStyles } from './styles'
import { PlayAudio } from '../../play-audio'
import { useContext } from 'react'

interface MenuButtonProps {
	open: boolean
	toggleMenu: () => void
}

/**
 * Renders a menu button element.
 *
 * @param {boolean} open - Indicates whether the menu is open or closed.
 * @param {() => void} toggleMenu - Callback function to toggle the menu.
 * @return {JSX.Element} The menu button element.
 */
export function MenuButton({ open, toggleMenu }: MenuButtonProps): JSX.Element {
	const { audio } = useContext(AudioContext)

	return (
		<MenuButtonStyles
			onClick={() => {
				toggleMenu()
				audio === 'on' && PlayAudio({ file: '/sounds/click.wav' })
			}}
			aria-expanded={open}
			data-popover>
			<img
				src={open ? '/icons/close.svg' : '/icons/menu.svg'}
				alt={open ? 'Close menu' : 'Open menu'}
				title={open ? 'Close menu' : 'Open menu'}
				width={24}
				height={24}
			/>
		</MenuButtonStyles>
	)
}
