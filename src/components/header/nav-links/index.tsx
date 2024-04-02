import { AudioToggle } from '../../audio-toggle'
import { Button } from '../../button'
import { NavLink } from '../nav-link'
import { NavLinksStyles } from './styles'
import { ThemeToggle } from '../../theme-toggle'
import { navLinks } from '../data'

interface NavLinksProps {
	toggleMenu?: () => void
	open?: boolean
}

/**
 * Renders the navigation links component.
 *
 * @param {function} toggleMenu - A function to toggle the menu.
 * @param {boolean} open - A boolean indicating whether the menu is open or not.
 * @return {JSX.Element} The rendered navigation links component.
 */
export function NavLinks({ toggleMenu, open }: NavLinksProps) {
	return (
		<NavLinksStyles open={open}>
			{navLinks.map(({ href, label }) => (
				<NavLink key={label} href={href} onClick={toggleMenu}>
					{label}
				</NavLink>
			))}
			<Button variant='outlined'>
				<a
					href='/documents/resume.docx'
					target='_blank'
					rel='noopener noreferrer'
					title='Open resume in new tab'>
					Download resume
					<img
						src='/icons/download.svg'
						alt='Download resume'
						width={16}
						height={16}
					/>
				</a>
			</Button>
			<ThemeToggle />
			<AudioToggle />
		</NavLinksStyles>
	)
}
