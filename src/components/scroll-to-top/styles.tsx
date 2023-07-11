import styled from 'styled-components'

export const ScrollToTopButton = styled.button<{ visible: string }>`
	position: fixed;
	bottom: var(--spacing-s-300);
	right: var(--spacing-s-300);
	background-color: transparent;
	display: ${(props) => (props.visible ? 'block' : 'none')};
`
