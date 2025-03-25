import { SongData, Song } from '../../models/songs'
import { useDeleteSong } from '../hooks/songsHook'
import { useState } from 'react'
import Songs from './Songs'

const initialState = { name: '', artist: '' }

export interface Props {
  songs: Song[]
}

function DeleteSong(props: Props) {
  const [formState, setFormState] = useState(initialState)

  const DeleteSongMutation = useDeleteSong()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const song = props.songs.find((song) => song.name == formState.name)
    if (song) {
 // find whole song based on the name user types in
    DeleteSongMutation.mutate(song?.id as number) // sends id off to server side to get deleted, if mispelled returns undefined
    setFormState(initialState)
    } // this if statement makes it safer
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    console.log(inputText)
    setFormState({ ...formState, [event.target.name as string]: inputText })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formState.name}
        onChange={handleChange}
      />
      {/* <input type="text" name="yearReleased" value={formState.name} onChange={handleChange} /> */}
      <button type="submit">Delete Song</button>
    </form>
  )
}

export default DeleteSong
