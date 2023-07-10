import styled from 'styled-components'

export const LinkStyles = styled.a`
	display: flex;
	align-items: center;
	text-align: right;
	position: relative;

	&:hover,
	&:active,
	&:focus {
		color: var(--primary-color);
	}

	&::before {
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;
		width: 0;
		height: 2px;
		border-radius: var(--border-radius-sm);
		background-color: var(--primary-color);
		transition: var(--transition-03);
	}

	&:hover::before,
	&:focus::before,
	&:active::before {
		width: 100%;
	}
`
