import React, { createContext, useEffect, useMemo, useState } from 'react'

import { PlayAudio } from '../components/play-audio'

type Audio = 'on' | 'off'

type AudioContextType = {
	audio: Audio
	toggleAudio: () => void
}

export const AudioContext = createContext<AudioContextType>({
	audio: 'on',
	toggleAudio() {
		return
	},
})

interface AudioProviderProps {
	children: React.ReactNode
}

export const AudioProvider: React.FC<AudioProviderProps> = ({
	children,
}: AudioProviderProps) => {
	const [audio, setAudio] = useState<Audio>(() => {
		const preferredAudio = localStorage.getItem('audio') as Audio | null
		if (preferredAudio) {
			return preferredAudio
		}
		return 'on'
	})

	useEffect(() => {
		localStorage.setItem('audio', audio)
	}, [audio])

	const toggleAudio: () => void = () => {
		setAudio((prevAudio: Audio) => (prevAudio === 'on' ? 'off' : 'on'))
		PlayAudio({ file: '/sounds/switch.wav' })
	}

	const contextValue: AudioContextType = useMemo(
		() => ({ audio, toggleAudio }),
		[audio]
	)

	return (
		<AudioContext.Provider value={contextValue}>
			{children}
		</AudioContext.Provider>
	)
}
