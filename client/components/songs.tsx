import { useSongs } from '../hooks/songsHook'
import AddSong from './addSong' // why is this not AddSong
import DeleteSong from './deleteSong'

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
      <DeleteSong songs={songs} />  
    </>
  )
}
// sends the variable with the component so the DeleteSong doesnt have to load the songs itself. Delete song is a child component. 
export default Songs
