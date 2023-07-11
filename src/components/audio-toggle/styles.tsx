import styled from 'styled-components'

export const AudioIcon = styled.div`
	cursor: pointer;
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: var(--transition-03);

	&:hover {
		background-color: var(--gray-800);
	}
`
