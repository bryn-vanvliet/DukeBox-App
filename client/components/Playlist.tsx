import { useSavedTracks } from "../hooks/useSavedTracks"
import { SongData } from "../../models/songData"


 const someTrack: SongData = {
    id: 1, // Use `id` as number (instead of `artistId`)
    title: 'Title',
    artist: 'plum',
    album: 'plums',
    preview: 'heres a plum',
    cover: 'moreplums',
  }

export function Playlist() {
  const { savedTracks, addTrackToSaved, removeTrackFromSaved } = useSavedTracks()

 

  return (
    <div>
      <h3>Your Saved Tracks, YAY!</h3>
      <ul>
        {savedTracks.map((savedSong) => (
          <li key={savedSong.id}>
            <p>{savedSong.title} - {savedSong.artist}</p>
            <button onClick={() => removeTrackFromSaved(savedSong.id)}>Remove</button>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={() => addTrackToSaved(someTrack)}>
          Add Track to Playlist
        </button>
      </div>
    </div>
  )
}