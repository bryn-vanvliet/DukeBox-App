import express from 'express'

import * as db from '../db/music.tsx'

const router = express.Router()

export default router

// GET /api/v1/songs

router.get('songs', async (req, res) => {
  try {
    const songs = await db.getAllSongs()
    res.json(songs)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    } else console.error('unknown error')
    res.sendStatus(500)
  }
})

// delete 


// create 


// update
