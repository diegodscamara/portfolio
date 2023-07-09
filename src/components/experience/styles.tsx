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
	background: var(--gray-900);
	border-radius: var(--border-radius-sm);
	border: 1px solid var(--gray-800);
	box-shadow: var(--shadow-10);
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
			animation: sweep 0.3s ease-in-out;
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

	&::-webkit-details-marker {
		display: none;
	}
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

export const CompanyLogo = styled.div`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: var(--transition-03);
	background-color: var(--gray-800);
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
