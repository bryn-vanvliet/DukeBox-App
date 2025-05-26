import { useState } from 'react'
import { UploadSong, SongData} from '../components/Upload'

import { Box, Text, VStack } from '@chakra-ui/react'


export default function UploadPage() {
  const [ songs, setSongs] = useState<SongData[]>([])

  const addSong = (newSong: SongData) => {
    setSongs((prev) => [...prev, newSong])
  }

  return (
    <Box p={6}>
    <UploadSong onUpload={addSong} />
    <VStack spacing={4} mt={6}>
      {songs.map((song) => (
        <Box key={song.id} borderWidth={1} p={4} w="100%">
          <Text fontWeight="bold">{song.name}</Text>
          <Text fontSize="sm">Artist: {song.artist}</Text>
          <Text fontSize="sm">Duration: {Math.round(song.duration)} seconds</Text>
          <audio controls src={song.fileUrl} />
        </Box>
      ))}
    </VStack>
    </Box>
  )
}