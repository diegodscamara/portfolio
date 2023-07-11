import { HeaderContainer, NavContainer } from './styles'
import { useContext, useEffect, useState } from 'react'

import { MenuButton } from './menu-button'
import { MobileMenuNav } from './mobile-menu-nav'
import { NavLinks } from './nav-links'
import { ThemeContext } from '../../context/ThemeContext'

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
export function Header(): JSX.Element {
	const [open, setOpen] = useState<boolean>(false)
	const toggleMenu = () => setOpen(!open)
	const { theme } = useContext(ThemeContext)
	const [isSticky, setIsSticky] = useState<boolean>(false)

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement // force cast to HTMLElement
			if (!target.closest('[data-popover]')) {
				setOpen(false)
			}
		}

		document.addEventListener('click', handleOutsideClick)
		return () => document.removeEventListener('click', handleOutsideClick)
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset
			setIsSticky(scrollTop > 81)
		}

		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<HeaderContainer id='header' isSticky={isSticky}>
			<NavContainer>
				<a href='/' title='Go to homepage' arial-label='Go to homepage'>
					<img
						src={
							theme === 'light'
								? '/icons/logo-dark.svg'
								: '/icons/logo-light.svg'
						}
					/>
				</a>
				<NavLinks toggleMenu={toggleMenu} />
				<MenuButton toggleMenu={toggleMenu} open={open} />
			</NavContainer>
			<MobileMenuNav open={open} toggleMenu={toggleMenu} />
		</HeaderContainer>
	)
}
