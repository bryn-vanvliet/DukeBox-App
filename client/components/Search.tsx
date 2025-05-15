import { useState, useEffect } from 'react'
import { Box, Button, Input, SimpleGrid, Text, Image } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

// Define the track type returned by the API
type Track = {
  id: number
  title: string
  artist: {
    name: string
  }
  album: {
    title: string
    cover: string
  }
  preview: string
  duration: number
}

export function DeezerSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Track[]>([])
  const location = useLocation()

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const queryParam = urlParams.get('q') || ''

    if (queryParam) {
      setQuery(queryParam)
      handleSearch(queryParam)
    }
  }, [location.search])

  const handleSearch = async (searchQuery: string) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/deezer/search?q=${encodeURIComponent(searchQuery)}`
      )
      const data = await response.json()
      setResults(data.data)
    } catch (error) {
      console.error('Error fetching from proxy server:', error)
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      <Box
        flex="0 0 auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="70vh"
      >
        <Input
          placeholder="Search Deezer..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          mb={4}
          maxW="400px"
        />
        <Button onClick={() => handleSearch(query)} mb={6} maxW="200px">
          Search
        </Button>
      </Box>

      <Box flex="1" overflowY="auto" px={4} pb={6}>
        <SimpleGrid columns={[1, 2, 3]} spacing={6} mt={10}>
          {results.map((track) => (
            <Box
              key={track.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              textAlign="center"
            >
              <Link to={`/play/${track.id}`}>
                {track.album.cover && (
                  <Image
                    src={track.album.cover}
                    alt={track.album.title}
                    borderRadius="md"
                    boxSize="150px"
                    objectFit="cover"
                    mb={3}
                    mx="auto"
                  />
                )}
                <Text fontWeight="bold">{track.title}</Text>
                <Text fontSize="sm" color="gray.600">
                  {track.artist.name}
                </Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}
