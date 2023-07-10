import styled from 'styled-components'

export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: sticky;
	top: 0;
	padding: var(--spacing-s-300) var(--spacing-m-500);
	width: 100%;
	background-color: var(--gray-900);
	z-index: 10;
	border-bottom: 1px solid var(--gray-800);

	@media screen and (max-width: 1024px) {
		padding: var(--spacing-s-300) var(--spacing-s-300);
	}
`

export const NavContainer = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	height: 100%;
	position: relative;
`
