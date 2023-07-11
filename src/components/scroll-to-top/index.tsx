import { useEffect, useState } from 'react'

import { AudioContext } from '../../context/AudioContext'
import { PlayAudio } from '../play-audio'
import { ScrollToTopButton } from './styles'
import { useContext } from 'react'

/**
 * ScrollToTop function returns a JSX.Element that represents a scroll-to-top button.
 *
 * @return {JSX.Element} The scroll-to-top button.
 */
export function ScrollToTop(): JSX.Element {
	const [isVisible, setIsVisible] = useState<boolean>(false)
	const { audio } = useContext(AudioContext)

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		setIsVisible(scrollTop > 200)
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
		audio === 'on' && PlayAudio({ file: '/sounds/click.wav' })
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<ScrollToTopButton visible={isVisible} onClick={scrollToTop}>
			<img
				src='/icons/scroll-up.svg'
				alt='Scroll to top'
				title='Scroll to top'
				width={24}
				height={24}
			/>
		</ScrollToTopButton>
	)
}
