import styled from 'styled-components'

export const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 32px;
	width: 100%;
	min-height: 100vh;

	img[alt='Front End Developer'] {
		width: 100%;
	}

	@media only screen and (max-width: 1024px) {
		flex-direction: column-reverse;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;

	@media only screen and (max-width: 1024px) {
		gap: 16px;
	}
`

export const Header = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
`

export const Title = styled.h3`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: var(--font-m-400);
	color: var(--button-color);
`

export const Description = styled.span`
	color: var(--text-color);
`
