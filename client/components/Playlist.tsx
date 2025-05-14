import { useSavedTracks } from '../hooks/useSavedTracks'

export function Playlist() {
  const { savedTracks, removeTrackFromSaved } = useSavedTracks()

  return (
    <div>
      <h3>Your Saved Tracks, YAY!</h3>
      <ul>
        {savedTracks.map((savedSong) => (
          <li key={savedSong.id}>
            <p>
              {savedSong.title} - {savedSong.artist}
            </p>
            <button onClick={() => removeTrackFromSaved(savedSong.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
