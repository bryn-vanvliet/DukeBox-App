import { useSavedTracks } from "../hooks/useSavedTracks"
import { SongData } from "../../models/songs"


export function Playlist() {
  const { savedTracks, addTrackToSaved, removeTrackFromSaved } = useSavedTracks()

  // Ensure that `someTrack` follows the `SongData` structure
  const someTrack: SongData = {
    id: 123, // Use `id` as number (instead of `artistId`)
    title: 'Title',
    artist: 'plum',
    album: 'plums',
    preview: 'heres a plum',
    cover: 'moreplums',
  }

  return (
    <div>
      <h3>Your Saved Tracks, YAY!</h3>
      <ul>
        {savedTracks.map((track) => (
          <li key={track.id}>
            <p>{track.title} - {track.artist}</p>
            <button onClick={() => removeTrackFromSaved(track.id)}>Remove</button>
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