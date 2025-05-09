import { useParams, Link as RouterLink } from 'react-router-dom'
import { useTrack} from '../hooks/useTrack'
import { Box, Image, Text, Spinner, VStack, Link } from '@chakra-ui/react'


export function PlaySong() {
  const { id } = useParams()
  const { track, loading, error } = useTrack(id)

  if (loading) {
    return (
      <Box height="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" thickness="4px" speed="0.65s" color="teal.500" />
      </Box>
    )
  }

  if (error || !track) {
    return (
      <Box textAlign="center" p={8}>
        <Text color="red.500">Failed to load track.</Text>
        <Link as={RouterLink} to="/">Back to Search</Link>
      </Box>
    )
  }

  

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
        </VStack>
      </Box>
    </Box>
  )
}