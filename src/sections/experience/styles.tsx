import styled from 'styled-components'

export const Section = styled.section`
	min-height: 100vh;
`

export const Title = styled.h3``

export const Accordion = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: var(--spacing-m-400);
	gap: var(--spacing-s-300);
	width: 100%;
	height: 100%;
	background: linear-gradient(
		55.27deg,
		rgba(240, 240, 240, 0.04) 0%,
		rgba(240, 240, 240, 0) 100%
	);
	backdrop-filter: var(--background-blur);
	border-radius: var(--border-radius-sm);
	box-shadow: var(--shadow-10);

	&:hover {
		background: linear-gradient(
			55.27deg,
			rgba(240, 240, 240, 0.06) 0%,
			rgba(240, 240, 240, 0) 100%
		);
		box-shadow: var(--shadow-20);
	}
`

export const Details = styled.details`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: var(--spacing-m-400);
	border-bottom: 1px solid var(--gray-800);
	padding: var(--spacing-s-300) 0;

	&[open] {
		img[alt='Toggle icon'] {
			transform: rotate(-180deg);
		}

		summary ~ * {
			animation: sweep 0.5s ease-in-out;
		}

		@keyframes sweep {
			0% {
				opacity: 0;
				transform: translateY(-16px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}
	}
`

export const Summary = styled.summary`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 0px;
	gap: var(--spacing-s-200);
	width: 100%;
	cursor: pointer;
	transition: var(--transition-03);
`

export const ArrowIcon = styled.img`
	transition: var(--transition-03);
`

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: wrap;
	padding: 0px;
	gap: var(--spacing-s-300);
	min-height: auto;
`

export const Company = styled.h5``
export const Location = styled.span`
	height: 100%;
	font-style: normal;
	font-weight: var(--font-weight-regular);
	font-size: var(--font-s-100);
	color: var(--gray-200);
`

export const Content = styled.div`
	display: flex;
	height: 100%;
	overflow: hidden;
	flex-direction: column;
	align-items: flex-start;
	gap: var(--spacing-s-300);
	transition: var(--transition-03);
	padding-top: var(--spacing-m-500);
`

export const Position = styled.h5`
	color: var(--gray-100);
`

export const Intro = styled.span`
	color: var(--gray-100);
`

export const Responsibilities = styled.ul`
	display: flex;
	flex-direction: column;
`

export const Responsibility = styled.li`
	list-style-type: disc;
	list-style-position: inside;
	color: var(--gray-100);
`
