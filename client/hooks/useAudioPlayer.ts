import { useEffect, useState } from "react"

let globalAudio: HTMLAudioElement | null = null

export function useAudioPlayer(previewUrl: string) {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!globalAudio || globalAudio.src !== previewUrl) {
      globalAudio?.pause()
      globalAudio = new Audio(previewUrl)
    }

    if (!globalAudio.paused) {
      globalAudio.pause()
      setIsPlaying(false)
    } else {
      globalAudio.play()
      setIsPlaying(true)
    }

    globalAudio.onended = () => setIsPlaying(false)
  }

  useEffect(() => {
    return () => {
      if (globalAudio?.src === previewUrl) {
        globalAudio.pause()
        globalAudio = null
      }
    }
  }, [previewUrl])

  return { isPlaying, togglePlay }
}
