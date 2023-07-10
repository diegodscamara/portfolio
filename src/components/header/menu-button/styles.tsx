import styled from 'styled-components'

export const MenuButtonStyles = styled.button`
	background-color: transparent;
	display: none;

	@media only screen and (max-width: 1200px) {
		display: flex;
	}

	img {
		height: var(--spacing-m-400);
		width: var(--spacing-m-400);
	}
`
