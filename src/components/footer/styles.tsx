import styled from 'styled-components'

export const Section = styled.footer`
	display: flex;
	padding: var(--spacing-s-300) var(--spacing-m-500);
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	align-self: stretch;
	border-top: 1px solid var(--gray-800);

	@media (max-width: 1024px) {
		padding: var(--spacing-s-300) var(--spacing-s-300);
	}
`

export const Content = styled.span`
	color: var(--gray-300);
	font-size: 1.3rem;

	@media (max-width: 600px) {
		text-align: center;
		width: 100%;
	}
`

export const Name = styled.span`
	color: var(--gray-200);
	font-size: 1.3rem;
`

export const Icons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--spacing-s-300);

	img {
		width: var(--spacing-s-300);
		height: var(--spacing-s-300);
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0.25rem;
		transition: var(--transition-03);

		&:hover {
			transform: translateY(-5px);
		}
	}

	@media (max-width: 600px) {
		align-items: center;
		width: 100%;
	}
`
