
import {
  Box,
  Text,
  VStack,

  Select,
} from '@chakra-ui/react'
import { PlaylistItem } from './Playlist-item'
import { useEffect, useState } from 'react'
import { Playlist } from '../../models/Playlist'


function formatDuration(seconds: number) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

export function PlaylistView() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedPlaylist = playlists.find((p) => p.id === selectedId)

  // Load playlists from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('dukebox-playlists')
    if (stored) {
      const parsed: Playlist[] = JSON.parse(stored)
      setPlaylists(parsed)

      if (parsed.length > 0) {
        setSelectedId(parsed[0].id)
      }
    }
  }, [])

  const removeTrackFromPlaylist = (songId: number) => {
    if (!selectedId) return

    const updated = playlists.map((playlist) => {
      if (playlist.id === selectedId) {
        return {
          ...playlist,
          songs: playlist.songs.filter((song) => song.id !== songId),
        }
      }
      return playlist
    })

    setPlaylists(updated)
    localStorage.setItem('dukebox-playlists', JSON.stringify(updated))
  }

  return (
    <Box
      minHeight="100vh"
      px={6}
      py={10}
      bgGradient="linear(to-b, beige 0%, #fefae0 100%)"

    >
      

      <Select
        placeholder="Select a playlist"
        mb={6}
        mt={40}
        height="50"
        onChange={(e) => setSelectedId(e.target.value)}
        value={selectedId || ''}
      >
        {playlists.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </Select>

      {selectedPlaylist ? (
        selectedPlaylist.songs.length === 0 ? (
          <Text align="center">No songs in this playlist yet.</Text>
        ) : (
          <VStack spacing={0} align="stretch">
            {selectedPlaylist.songs.map((song) => (
              <PlaylistItem
                key={song.id}
                title={song.title}
                artist={song.artist.name}
                duration={formatDuration(song.duration)}
                albumCover={song.album.cover}
                previewURL={song.preview}
                onRemove={() => removeTrackFromPlaylist(song.id)}
              />
            ))}
          </VStack>
        )
      ) : (
        <Text align="center">No playlist selected</Text>
      )}
    </Box>
  )
}
      
    
        
     
