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
      <AddSong />
      
        {songs.map((song, idx) => (
          <Box key={idx} bg="gray.800" p={3} borderRadius="md">
            <Text>{song.name}</Text>
       </Box>
        ))}
      
      <DeleteSong songs={songs} />
      </VStack>
    </Box>
      
    </>
  )
}
// sends the variable with the component so the DeleteSong doesnt have to load the songs itself. Delete song is a child component.
