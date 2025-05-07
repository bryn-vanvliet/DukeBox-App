import  { useState } from 'react'
import {Button, Box, Input} from '@chakra-ui/react'

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
  alignItems="center"
  justifyContent="center"
  height="100vh"
  >
    <Input
    placeholder="Search Deezer..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    mb={4}
    maxWidth="400px"
    />
    <Button 
    onClick={handleSearch}
    position="relative"
    top={['4rem', '3rem', '2rem', '1rem']}
    maxWidth="200px">
      Search
      </Button>
    <ul>
      {results.map((track) => (
        <li key={track.id}>
          <h3>{track.title} - {track.artist.name}</h3>
          {track.album.cover && (
            <img src={track.album.cover} alt={track.album.title} style={{width: '100px'}} />
          )} 
        </li>
      ))}
    </ul>
  </Box>
)
}

