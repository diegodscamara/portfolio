import { MenuButtonStyles } from './styles'
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
	return (
		<MenuButtonStyles
			onClick={toggleMenu}
			aria-label='Toggle menu'
			title='Toggle menu'
			aria-expanded={open}
			data-popover>
			{open ? (
				<img src='/icons/close.svg' alt='Close menu' title='Close menu' />
			) : (
				<img src='/icons/menu.svg' alt='Open menu' title='Open menu' />
			)}
		</MenuButtonStyles>
	)
}
