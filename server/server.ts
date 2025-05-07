import * as Path from 'node:path'
import deezerRoutes from './routes/deezer.ts'
import cors from 'cors'

import express from 'express'
//change this
import songsRoutes from './routes/songs.ts'
import artistRoutes from './routes/artist.ts'

const server = express()
server.use(cors())
server.use(express.json())

// ADD YOUR API ROUTES HERE
//change this
server.use('/api/v1/songs', songsRoutes)
server.use('/api/v1/artist', artistRoutes)
server.use('/api/v1/deezer', deezerRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
