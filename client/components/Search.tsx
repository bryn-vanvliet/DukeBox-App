import  { useState } from 'react'

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
    <button onClick={handleSearch}>Search</button>
    <ul>
      {results.map((track) => (
        <li key={track.id}>
          {track.title} - {track.artist.name}
        </li>
      ))}
    </ul>
  </div>
)
}

