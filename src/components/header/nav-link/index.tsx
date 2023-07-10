import { LinkStyles } from './styles'

export type NavLinkProps = {
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
		<LinkStyles
			href={href}
			onClick={onClick}
			title={`${children} section`}
			aria-label={`${children} section`}
			className={`${children} section`}>
			{children}
		</LinkStyles>
	)
}
