import styled from 'styled-components'

export const MobileMenuNavStyles = styled.div<{ open: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: var(--spacing-m-400);
	padding: var(--spacing-m-500);
	position: fixed;
	top: 7.75rem;
	right: 0;
	height: 100vh;
	background-color: var(--gray-900);
	box-shadow: var(--shadow-20);
	transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(100%)')};
	transition: var(--transition-03);

	@media only screen and (min-width: 1200px) {
		display: none;
	}
`
