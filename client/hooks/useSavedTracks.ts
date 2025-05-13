import { useEffect, useState } from 'react'
import { SongData } from '../../models/songs'

export function useSavedTracks() {
  const [savedTracks, setSavedTracks] = useState<SongData[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('savedTracks') // Gets the saved string from localStorage. If its there, JSON.parse turns it back into an array of SongData objects.
    if (saved) {
      try {
        const parsedTracks: SongData[] = JSON.parse(saved)
        console.log('Loaded saved tracks:', parsedTracks) // to Debug
        setSavedTracks(parsedTracks) // Updates the state with the parsed data.
      } catch (error) {
        console.error('Error parsing saved tracks:', error)
      }
    }
  }, []) // this runs only once a component is mounted. I can learn more about dependency arrays.

  return { savedTracks, setSavedTracks }
}
