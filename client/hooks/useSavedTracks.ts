import { useEffect, useState } from 'react'
import { SongData } from '../../models/songData'

export function useSavedTracks() {
  const [savedTracks, setSavedTracks] = useState<SongData[]>([])

  // Add track to playlist
  const addTrackToSaved = (track: SongData) => {
    setSavedTracks((prevSavedTracks) => {
      const updatedTracks = [...prevSavedTracks, track]
      localStorage.setItem('savedTracks', JSON.stringify(updatedTracks))
      return updatedTracks
    })
  }

  // Remove track from playlist by id
  const removeTrackFromSaved = (songId: number) => {
    setSavedTracks((prevSavedTracks) => {
      const updatedTracks = prevSavedTracks.filter(
        (song) => song.id !== songId
      )
      localStorage.setItem('savedTracks', JSON.stringify(updatedTracks))
      return updatedTracks
    })
  }

  // Load tracks from localStorage on first mount
  useEffect(() => {
    const saved = localStorage.getItem('savedTracks')
    if (saved) {
      try {
        const parsedTracks: SongData[] = JSON.parse(saved)
        console.log('Loaded saved tracks:', parsedTracks)
        setSavedTracks(parsedTracks)
      } catch (error) {
        console.error('Error parsing saved tracks:', error)
      }
    }
  }, [])

  return {
    savedTracks,
    setSavedTracks,
    addTrackToSaved, // Fixed name here (capital "T" to match common naming)
    removeTrackFromSaved,
  }
}