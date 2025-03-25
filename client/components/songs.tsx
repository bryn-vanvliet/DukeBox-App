import { useSongs } from '../hooks/songsHook'
import AddSong from './addSong' // why is this not AddSong

function Songs() {
  const { data: songs, isPending, error } = useSongs()

  if (isPending) {
    return <p>no songs yet</p>
  }
  if (error) {
    return <p>no songs ever</p>
  }

  return (
    <>
      <header className="header">
        <h1>Songs</h1>
      </header>
      <AddSong />
      <ul>
        {songs.map((song) => (
          <li key={song.name}>{song.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Songs
