import { Box, Text, VStack, Select, Button } from '@chakra-ui/react'
import { PlaylistItem } from './Playlist-item'
import { useEffect, useState } from 'react'
import { Playlist } from '../../models/Playlist'
import { useNavigate } from 'react-router-dom'
import { DeezerSearch } from './Search'

function formatDuration(seconds: number) {
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

export function PlaylistView() {
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const navigate = useNavigate()
  const [currentlyPlayingUrl, setCurrentlyPlayingUrl] = useState<string | null>(null)
  // const audioRef = useRef<HTML

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
      display="flex"
      alignItems="flex-start"
     

    >
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" mt={20}>
      <Select
        placeholder="Select a playlist"
        mb={6}
        mt={40}
        height="50"
        onChange={(e) => setSelectedId(e.target.value)}
        value={selectedId || ''}
        width="30%"
      >
        {playlists.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </Select>
      


      {selectedPlaylist ? (
        selectedPlaylist.songs.length === 0 ? (
          <Box textAlign="center" p={8}
          >
            <VStack spacing={4}>
              <Text fontSize="lg" color="gray.600">
                This playlist is empty.
              </Text>
              <Button
                colorScheme="teal"
                size="md"
                bgColor="pink"
                onClick={() => navigate('/')}
              >
                Add to Playlist
              </Button>
            </VStack>
          </Box>
        ) : (
          <VStack spacing={0} align="stretch" width="30%">
            {selectedPlaylist.songs.map((song) => (
              <PlaylistItem
              key={song.id}
              title={song.title}
              artist={song.artist.name}
              duration={formatDuration(song.duration)}
              albumCover={song.album.cover}
              previewURL={song.preview}
              onRemove={() => removeTrackFromPlaylist(song.id)}
              isActive={currentlyPlayingUrl === song.preview}
              onActivate={() => setCurrentlyPlayingUrl(song.preview)}
            />
            ))}
          </VStack>
        )
      ) : (
        <Text align="center">No playlist selected</Text>
      )}
      <Button
                colorScheme="teal"
                size="md"
                bgColor="pink"
                onClick={() => navigate('/')}
                mt={3}
              >
                Add to Playlist
              </Button>
              <DeezerSearch />
    </Box>
    
    </Box>
  )
}
