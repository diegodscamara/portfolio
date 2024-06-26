import styled, { css } from 'styled-components'

export const Wrapper = styled.section``

export const Title = styled.h3``

export const Form = styled.form`
	display: flex;
	width: 470px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: var(--spacing-s-300);

	@media (max-width: 600px) {
		width: 100%;
	}
`

export const inputStyles = css`
	padding: var(--spacing-s-200) var(--spacing-m-400);
	background: var(--gray-900);
	align-self: stretch;
	border-radius: var(--spacing-s-100);
	border: 1px solid var(--gray-800);
	color: var(--gray-200);
	box-shadow: var(--shadow-10);

	&:hover,
	&:focus {
		border: 1px solid var(--primary-variant-color);
	}
`

export const Input = styled.input`
	${inputStyles};
`

export const TextArea = styled.textarea`
	${inputStyles};
`

export const ErrorMessage = styled.span`
	color: var(--red);
`

export const SucessMessage = styled.span`
	color: var(--primary-color);
	text-align: center;
	font-weight: var(--font-weight-bold);
	width: 100%;
`
