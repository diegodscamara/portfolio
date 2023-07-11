import { Button } from '../../button'

interface NavLinkProps {
	href: string
	children: string
	onClick?: () => void
}

/**
 * Renders a navigation link component.
 *
 * @param {NavLinkProps} props - The props for the NavLink component.
 * @param {string} props.href - The URL for the link.
 * @param {React.ReactNode} props.children - The content of the link.
 * @param {Function} props.onClick - The function to be called when the link is clicked.
 * @returns {JSX.Element} The rendered NavLink component.
 */
export function NavLink({
	href,
	children,
	onClick,
}: NavLinkProps): JSX.Element {
	return (
		<Button variant='menu' onClick={onClick}>
			<a href={href}>{children}</a>
		</Button>
	)
}
