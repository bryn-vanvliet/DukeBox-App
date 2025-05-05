import { useSongs } from '../hooks/songsHook'
import AddSong from './AddSong' // why is this not AddSong
import DeleteSong from './DeleteSong'
import { Box, VStack, Text } from '@chakra-ui/react'

export function Songs() {
  const { data: songs, isPending, error } = useSongs()

  if (isPending) {
    return <p>no songs yet</p>
  }
  if (error) {
    return <p>no songs ever</p>
  }

  return (
    <>
    <Box w="300px" h="100vh" bg="gray.800" color="white" p={4} position="fixed">
      <Text fontSize="xl" mb={4}>Playlist</Text>
      <VStack align="stretch" spacing={3}>
        {songs.map((song, idx) => (
          <Box key={idx} bg="gray.700" p={2} borderRadius="md">
            <Text fontWeight="bold">{song.title}</Text>
            <Text fontSize="sm">{song.artist}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
      <header className="header">
        <h1>Songs</h1>
      </header>
      <AddSong />
      <ul>
        {songs.map((song) => (
          <li key={song.name}>{song.name}</li>
        ))}
      </ul>
      <DeleteSong songs={songs} />
    </>
  )
}
// sends the variable with the component so the DeleteSong doesnt have to load the songs itself. Delete song is a child component.
