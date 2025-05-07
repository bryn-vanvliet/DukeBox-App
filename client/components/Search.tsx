import  { useState } from 'react'
import {Button, Box} from '@chakra-ui/react'

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
  <div>
    <input
    type="text"
    placeholder="Search Deezer..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    />
    <Box>
    <Button onClick={handleSearch}>Search</Button>
    </Box>
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
  </div>
)
}

