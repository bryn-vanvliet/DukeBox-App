import { useEffect, useRef, useState } from "react"

export function useAudioPlayer(previewUrl: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(previewUrl)
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false)
      })
    }

    if(isPlaying) {
      audioRef.current.pause()}
      else {
        audioRef.current.play()
      }

      setIsPlaying(!isPlaying)
    }

    useEffect(() => {
      return () => {
        audioRef.current?.pause()
        audioRef.current = null
      }
    }, [])

    return { isPlaying, togglePlay}
  }
