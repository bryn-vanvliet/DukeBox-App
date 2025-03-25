import request from 'superagent'
import { SongData } from '../../models/songs'

export async function getSongs() {
const response = await request.get('/api/v1/songs')
console.log(response.body)
return response.body as SongData[]
}

export async function addSong(newSong: SongData) // already a function named this?
 {
  const response = await request.post('/api/v1/songs')
  console.log(response.body)
  return response.body as SongData[]
  }