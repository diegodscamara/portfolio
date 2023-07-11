import { AudioContext } from '../../context/AudioContext'
import { AudioIcon } from './styles'
import { useContext } from 'react'

export function AudioToggle() {
	const { audio, toggleAudio } = useContext(AudioContext)

	return (
		<AudioIcon onClick={toggleAudio}>
			<img
				src={audio === 'on' ? '/icons/audio-off.svg' : '/icons/audio-on.svg'}
				title={audio === 'on' ? 'Disable audio' : 'Enable audio'}
			/>
		</AudioIcon>
	)
}
