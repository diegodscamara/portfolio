import styled from 'styled-components'

export const ScrollToTopButton = styled.button<{ visible: boolean }>`
	position: fixed;
	bottom: var(--spacing-s-300);
	right: var(--spacing-s-300);
	background-color: transparent;
	display: ${(props) => (props.visible ? 'flex' : 'none')};
	cursor: pointer;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	transition: var(--transition-03);

	&:hover {
		background-color: var(--gray-800);
	}
`
