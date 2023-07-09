/* eslint-disable @typescript-eslint/restrict-template-expressions */
import {
	HeaderContainer,
	LinkStyles,
	MenuButton,
	MobileMenuNav,
	NavContainer,
	NavLinks,
} from './styles'
import React, { useContext, useEffect, useState } from 'react'

import { Button } from '../../components/button'
import { ThemeContext } from '../../ThemeContext'
import { ThemeToggle } from '../theme-toggle'

export type NavLinkProps = {
	href: string
	children: React.ReactNode
	onClick?: () => void
}

const NavLink = React.memo(({ href, children, onClick }: NavLinkProps) => {
	return (
		<LinkStyles
			href={href}
			onClick={onClick}
			title={`${children} section`}
			aria-label={`${children} section`}
			className={`${children} section`}>
			{children}
		</LinkStyles>
	)
})

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
export function Header(): JSX.Element {
	const [open, setOpen] = useState(false)
	const toggleMenu = () => setOpen(!open)
	const { theme } = useContext(ThemeContext)

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

	const navLinks = [
		{ href: '#About', label: 'About' },
		{ href: '#Skills', label: 'Skills' },
		{ href: '#Experience', label: 'Experience' },
		{ href: '#Projects', label: 'Projects' },
		{ href: '#Contact', label: 'Contact' },
	]

	return (
		<HeaderContainer>
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
				<NavLinks>
					{navLinks.map(({ href, label }) => (
						<NavLink key={label} href={href}>
							{label}
						</NavLink>
					))}
					<Button variant='outlined'>
						<a
							href='/documents/resume.pdf'
							target='_blank'
							rel='noopener noreferrer'
							title='Open resume in new tab'>
							Download resume
							<img src='/icons/download.svg' />
						</a>
					</Button>
					<ThemeToggle />
				</NavLinks>
				<MenuButton
					onClick={toggleMenu}
					aria-label='Toggle menu'
					aria-expanded={open}
					data-popover>
					{open ? (
						<img src='/icons/close.svg' alt='Close menu' title='Close menu' />
					) : (
						<img src='/icons/menu.svg' alt='Open menu' title='Open menu' />
					)}
				</MenuButton>
				<MobileMenuNav open={open} data-popover>
					<ThemeToggle />
					{navLinks.map(({ href, label }) => (
						<NavLink key={href} href={href} onClick={toggleMenu}>
							{label}
						</NavLink>
					))}
					<Button variant='outlined'>
						<a
							href='/documents/resume.pdf'
							target='_blank'
							rel='noopener noreferrer'
							title='Open resume in new tab'>
							Download resume
							<img src='/icons/download.svg' />
						</a>
					</Button>
				</MobileMenuNav>
			</NavContainer>
		</HeaderContainer>
	)
}
