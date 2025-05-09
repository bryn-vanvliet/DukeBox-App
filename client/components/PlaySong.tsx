import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {Box, Image, Text, Spinner } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

interface Track {
  id: number
  title: string
  preview: string
  duration: number
  artist: {
    name: string
    picture: string
  }
  album: {
    cover_big: string | undefined
    title: string
    cover: string
  }
}

export function PlaySong() {
  const { id } = useParams()
  const [ track, setTrack ] = useState<Track | null>(null)

  useEffect(() => {
    async function fetchTrack() {
      const res = await fetch(`http://localhost:5000/api/v1/deezer/play/${id}`)
      const data = await res.json()
      setTrack(data)
    }

    fetchTrack()
  }, [id])

  if (!track) return <Spinner size="xl" /> 

  return (
    <Box textAlign="center" p={4}>
      <Image src={track.album.cover_big} alt={track.album.title} mx="auto" />
      <Text fontSize="2xl" mt={2}>{track.title}</Text>
      <Text>{track.artist.name}</Text>
      <audio controls style={{ marginTop: '20px'}}>
        <source src={track.preview} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Link to="/">Back to Search</Link>
    </Box>
    
  )
}