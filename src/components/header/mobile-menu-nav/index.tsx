import { MobileMenuNavStyles } from './styles'
import { NavLinks } from '../nav-links'

interface MobileMenuNavProps {
	open: boolean
	toggleMenu: () => void
}

export function MobileMenuNav({
	open,
	toggleMenu,
}: MobileMenuNavProps): JSX.Element {
	return (
		<MobileMenuNavStyles open={open}>
			<NavLinks toggleMenu={toggleMenu} open={open} />
		</MobileMenuNavStyles>
	)
}
