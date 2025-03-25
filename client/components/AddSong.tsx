
import { useAddSong } from "../hooks/songsHook";
import { useState } from "react";

const initialState = { name: '', artist: ''}

function AddSong() {
  const [formState, setFormState] = useState(initialState)

  const addSongMutation = useAddSong()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addSongMutation.mutate({
      name: formState.name,
      artistId: '', // how do I make this a number? 
      yearReleased: '',
      url: '',
      artwork: '',
    })
    setFormState(initialState)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value
    console.log(inputText)
    setFormState({...formState, [event.target.name as string]: inputText})
  }
return (
<form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input type="text" name="name" id='name' value={formState.name} onChange={handleChange} />
      <label htmlFor='artist'>Artist: </label>
      {/* <input type="text" name="yearReleased" value={formState.name} onChange={handleChange} /> */}
      <button type="submit">Add Song</button>
    
    </form>
)
}

export default AddSong