import styled from 'styled-components'

export const NavLinksStyles = styled.nav<{ open?: boolean }>`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	padding: 0;
	gap: var(--spacing-m-400);

	@media only screen and (max-width: 1200px) {
		flex-direction: column;
		display: ${({ open }) => (open ? 'flex' : 'none')};
	}
`
