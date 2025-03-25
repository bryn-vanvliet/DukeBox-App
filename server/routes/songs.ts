import express from 'express'


import * as db from '../db/dbFunctions.tsx'

const router = express.Router()

export default router

// GET /api/v1/songs

router.get('/', async (req, res) => {
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

router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    await db.deleteSong(id)
    res.sendStatus(204)
  } catch (e) {
    next (e)
  }
})
// create

router.post('/', async (req, res, next) => {
  try {
   await db.addSong(req.body)
    res.sendStatus(204)
  } catch (e) {
    next (e)
  }
})

// update

router.patch('/:id', async (req, res, next) => {
  try {
    // const { name, url, artwork, yearReleased} = req.body
    
    const { name, yearReleased, artistId} = req.body
    const id = Number(req.params.id)
    const url = String(req.body.url)
    const artwork = String(req.body.artwork)
  
    await db.updateSong({name, yearReleased, id, url, artwork, artistId})
    res.sendStatus(204)
  } catch (e) {
    next (e)
  }
})

