import { ButtonStyles } from './styles'

export type ButtonProps = {
	variant: 'filled' | 'outlined' | 'inline' | 'skill'
	children?: React.ReactNode
	type?: string
}

/**
 * Render a button component with a specified variant and children.
 *
 * @param {ButtonProps} variant - The variant of the button.
 * @param {ButtonProps} children - The children elements of the button.
 * @return {JSX.Element} The rendered button component.
 */
export function Button({ variant, children }: ButtonProps) {
	return <ButtonStyles variant={variant}>{children}</ButtonStyles>
}
