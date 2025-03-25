import request from 'superagent'
import { SongData, Song } from '../../models/songs'

export async function getSongs() {
const response = await request.get('/api/v1/songs')
console.log(response.body)
return response.body as SongData[]
}
 //create
export async function addSong(newSong: SongData) // already a function named this?
 {
  const response = await request.post('/api/v1/songs').send(newSong)
  console.log(response.body)
  return response.body as Song
  }

  //delete 
   // Delete mutation

  // pass the id in the function instead of song object. Switch out addSong for a delete function
  // deleteSongMutation.mutate({id})

  //update 

 