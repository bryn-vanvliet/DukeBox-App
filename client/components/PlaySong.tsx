import { useParams, Link as RouterLink } from 'react-router-dom'
import { useTrack } from '../hooks/useTrack'
import {
  Box,
  Image,
  Text,
  Spinner,
  VStack,
  Link,
  Button,
  Select,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Playlist } from '../../models/Playlist'
import { SongData } from '../../models/songData'

export function PlaySong() {
  const { id } = useParams()
  const { track, loading, error } = useTrack(id)
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [selectedId, setSelectedId] = useState<string>('')
  const [creatingNew, setCreatingNew] = useState(false)
  const [newPlaylistName, setNewPlaylistName] = useState('')

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

  const addToPlaylist = (song: SongData) => {
    if (!selectedId) return

    const updated = playlists.map((playlist) => {
      if (
        playlist.id === selectedId &&
        !playlist.songs.some((s) => s.id === song.id)
      ) {
        return {
          ...playlist,
          songs: [...playlist.songs, song],
        }
      }
      return playlist
    })

    setPlaylists(updated)
    localStorage.setItem('dukebox-playlists', JSON.stringify(updated))
  }

  if (loading) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
      </Box>
    )
  }

  if (error || !track) {
    return (
      <Box textAlign="center" p={8}>
        <Text color="red.500">Failed to load track.</Text>
        <Link as={RouterLink} to="/">
          Back to Search
        </Link>
      </Box>
    )
  }

  const song: SongData = {
    id: track.id,
    title: track.title,
    artist: track.artist,
    album: {
      title: track.album.title,
      cover: track.album.cover,
      cover_small: track.album.cover_small || track.album.cover, // this line is safe
      cover_big: track.album.cover_big,
    },
    preview: track.preview,
    duration: track.duration,
  }

  console.log('selectedId:', selectedId)
  console.log('playlists:', playlists)

  const selectedPlaylist = playlists.find((p) => p.id === selectedId)
  const isSaved = selectedPlaylist
    ? selectedPlaylist.songs.some((s) => s.id === song.id)
    : false

  return (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    height="100vh"
    bgGradient="linear(to-b, beige 0%, #fefae0 100%)"
    px={4}
  >
    <Box
      bg="white"
      p={8}
      borderRadius="2xl"
      boxShadow="2xl"
      maxW="420px"
      width="100%"
      textAlign="center"
      border="1px solid #ccc"
    >
      <VStack spacing={5}>
        {/* Song Info */}
        <Image
          src={track.album.cover_big}
          alt={track.album.title}
          borderRadius="xl"
          boxSize="250px"
          objectFit="cover"
        />

        <Text fontSize="2xl" fontWeight="bold" fontFamily="Georgia, serif">
          {track.title}
        </Text>

        <Text fontSize="md" color="gray.600" fontStyle="italic">
          {track.artist.name}
        </Text>

        <Box as="audio" controls width="100%" mt={2}>
          <source src={track.preview} type="audio/mpeg" />
          Your browser does not support the audio element.
        </Box>

        <Link
          as={RouterLink}
          to="/"
          color="teal.600"
          fontWeight="semibold"
          mt={4}
          _hover={{ textDecoration: 'underline' }}
        >
          ← Back to Search
        </Link>

        {/* Playlist UI goes here */}
        {playlists.length === 0 ? (
          <VStack spacing={2} w="100%">
            <Text fontSize="sm" fontWeight="medium">
              Create Your First Playlist
            </Text>
            <Box display="flex" gap={2} w="100%">
              <input
                type="text"
                value={newPlaylistName}
                onChange={(e) => setNewPlaylistName(e.target.value)}
                placeholder="Playlist name"
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '8px',
                  border: '1px solid #ccc',
                }}
              />
              <Button
                colorScheme="teal"
                onClick={() => {
                  const newId = Date.now().toString()
                  const newPlaylist: Playlist = {
                    id: newId,
                    name: newPlaylistName.trim(),
                    songs: [song],
                  }

                  const updated = [...playlists, newPlaylist]
                  setPlaylists(updated)
                  localStorage.setItem('dukebox-playlists', JSON.stringify(updated))
                  setSelectedId(newId)
                  setCreatingNew(false)
                  setNewPlaylistName('')
                }}
                isDisabled={!newPlaylistName.trim()}
              >
                Create
              </Button>
            </Box>
          </VStack>
        ) : (
          <>
            <Select
              placeholder="Select a playlist"
              value={selectedId}
              onChange={(e) => {
                if (e.target.value === 'new') {
                  setCreatingNew(true)
                  setSelectedId('')
                } else {
                  setCreatingNew(false)
                  setSelectedId(e.target.value)
                }
              }}
            >
              {playlists.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
              <option value="new">+ Create New Playlist</option>
            </Select>

            {creatingNew && (
              <VStack spacing={2} w="100%">
                <Text fontSize="sm" fontWeight="medium">New Playlist Name</Text>
                <Box display="flex" gap={2} w="100%">
                  <input
                    type="text"
                    value={newPlaylistName}
                    onChange={(e) => setNewPlaylistName(e.target.value)}
                    placeholder="Playlist name"
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                    }}
                  />
                  <Button
                    colorScheme="teal"
                    onClick={() => {
                      const newId = Date.now().toString()
                      const newPlaylist: Playlist = {
                        id: newId,
                        name: newPlaylistName.trim(),
                        songs: [song],
                      }

                      const updated = [...playlists, newPlaylist]
                      setPlaylists(updated)
                      localStorage.setItem('dukebox-playlists', JSON.stringify(updated))
                      setSelectedId(newId)
                      setCreatingNew(false)
                      setNewPlaylistName('')
                    }}
                    isDisabled={!newPlaylistName.trim()}
                  >
                    Create
                  </Button>
                </Box>
              </VStack>
            )}

            {!creatingNew && (
              <Button
                colorScheme="teal"
                onClick={() => addToPlaylist(song)}
                isDisabled={!selectedId || isSaved}
              >
                {isSaved ? 'Already in Playlist' : 'Add to Playlist'}
              </Button>
            )}
          </>
        )}
      </VStack>
    </Box>
  </Box>
)}

