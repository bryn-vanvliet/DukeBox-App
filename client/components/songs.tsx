import { getSongs } from "../apis/songs"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"

const initialState = { name: '', yearReleased: ''}

export default function Songs () {
const {data: songs, isPending, error} = useQuery({queryKey: ['songs'], queryFn: () => getSongs()})

const [formState, setFormState] = useState({name: ''}) // creating a state to keep track of the form

const queryClient = useQueryClient()
const addSongMutation = useMutation({
  mutationFn: (song: SongData) => addSong(song),
  onSuccess: async () => {
    queryClient.invalidateQueries({querykey: ['birds']})
  }
})

if(isPending) {
  return <p>no songs yet</p>
}
if(error) {
  return <p>no songs ever</p>
} 

const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>)=> {
  event.preventDefault()
  //Send mutatiion (mutate the mutation)
  addSongMutation.mutate({name: formState.name,
    //the other data
  })
  // sends this straight through to the database
  
  setFormState(initialState)
}

// this is wrong or like 27
const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
  const inputText = event.target.value
  console.log(inputText)
  setFormState({ ...formState, [event.target.name as string]: inputText})
}


return (
  <>
  <header className="header">
    <h1>Songs</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Name: </label>
      <input type="text" name="name" id='name' value={formState.name} onChange={handleChange} />
      <label htmlFor='yearReleased'>Year Released: </label>
      <input type="text" name="yearReleased" value={formState.name} onChange={handleChange} />
      <button type="submit">Add Song</button>
    
    </form>
    </header>
    <ul>
      {/* {songs}  */}
    </ul>
    
    </>

)
}
