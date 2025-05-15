import { useEffect, useState} from 'react'
import { SongData } from '../../models/songData'


export function useTrack(id?: string) {
  const [track, setTrack] = useState<SongData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!id) return

    const fetchTrack = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/v1/deezer/play/${id}`)
        if (!res.ok) throw new Error('Failed to fetch track')
          const data = await res.json()
        setTrack(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchTrack()

  }, [id])
  return { track, loading, error}
}