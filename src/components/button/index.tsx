import { AudioContext } from '../../context/AudioContext'
import { ButtonStyles } from './styles'
import { PlayAudio } from '../play-audio'
import { useContext } from 'react'

export type ButtonProps = {
	variant: 'filled' | 'outlined' | 'inline' | 'skill' | 'menu'
	children?: React.ReactNode
	type?: string
	onClick?: () => void
}

/**
 * Render a button component with a specified variant and children.
 *
 * @param {ButtonProps} variant - The variant of the button.
 * @param {ButtonProps} children - The children elements of the button.
 * @return {JSX.Element} The rendered button component.
 */
export function Button({ variant, children, onClick }: ButtonProps) {
	const { audio } = useContext(AudioContext)
	return (
		<ButtonStyles
			variant={variant}
			onClick={() => {
				if (onClick) {
					onClick()
				}
				audio === 'on' && PlayAudio({ file: '/sounds/click.wav' })
			}}>
			{children}
		</ButtonStyles>
	)
}
