import styled, { css } from 'styled-components'

interface ButtonProps {
	variant: 'filled' | 'outlined' | 'inline' | 'skill'
}

const variants = {
	filled: css`
		background: var(--primary-color);
		color: #222222;
	`,
	outlined: css`
		color: var(--gray-50);
		border: 1px solid var(--gray-700);
		background-color: transparent;

		&:hover {
			background-color: var(--gray-700);
		}
	`,
	inline: css`
		border: none;
		background-color: transparent;
		color: var(--gray-50);
		cursor: default;
		padding: var(--spacing-s-200) 0;

		&:hover {
			color: var(--primary-color);
		}
	`,
	skill: css`
		border: 1px solid var(--gray-700);
		color: var(--gray-200);
		background-color: var(--gray-800);
		cursor: default;
	`,
}

export const ButtonStyles = styled.button<ButtonProps>`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-s-200);
	padding: var(--spacing-s-200) var(--spacing-m-500);
	width: fit-content;
	border-radius: var(--border-radius-sm);
	font-weight: var(--font-weight-bold);
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}

	a {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: var(--spacing-s-200);
	}
	${(props) => variants[props.variant || 'filled']}
`
