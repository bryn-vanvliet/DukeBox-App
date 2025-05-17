import request from 'superagent'


export async function getSongs() {
const response = await request.get('/api/v1/songs')
console.log(response.body)
return response.body as Song[]
}
 //create
export async function addSong(newSong: SongData) // already a function named this?
 {
  const response = await request.post('/api/v1/songs').send(newSong)
  console.log(response.body)
  return response.body as Song
  }

  //delete 

  export async function deleteSong(id: number) {
    const response = await request.delete(`/api/v1/songs/${id}`)
    return response
  }
   

  //update 

 