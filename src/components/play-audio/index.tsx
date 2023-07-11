interface PlayAudioProps {
	file: string
}

/**
 * Plays the specified audio.
 *
 * @param {string} audio - The URL of the audio to play.
 * @return {void} This function does not return anything.
 */
export function PlayAudio({ file }: PlayAudioProps) {
	try {
		const audioObj = new Audio(file)
		audioObj
			.play()
			.catch((error) => console.error('Failed to play audio:', error))
	} catch (error) {
		console.error('Failed to play audio:', error)
	}
}
