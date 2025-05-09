import  { useState } from 'react'

import {Button, Box, Input, SimpleGrid, Text, Image} from '@chakra-ui/react'
import {Link} from 'react-router-dom'

export function DeezerSearch () {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/v1/deezer/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      setResults(data.data)
    } catch (error) {
      console.error('Error fetching from proxy server:', error)
    }
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      >
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
      <Button 
        onClick={handleSearch}
        mb={6}
        maxW="200px"
      >
        Search
      </Button>
  </Box>

 {/* results area */}
  <Box 
  flex="1"
  overflowY="auto"
  px={4}
  pb={6}
  >
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
            <Link to={`/search?q=${encodeURIComponent(query)}`}>
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
            <Text fontSize="sm" color="gray.600">{track.artist.name}</Text>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    </Box>
  )}