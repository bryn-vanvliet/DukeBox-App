import express from 'express'
import axios from 'axios'

const router = express.Router()



//GET /api/v1/search

router.get('/search', async (req, res) => {
    const query = req.query.q as string

  if (!query) {
    return res.status(400).json({ error: "Missing search query (q)"})
  }
  try {
    const deezerRes = await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(query)}`)
    res.json(deezerRes.data)
  } catch (err) {
    console.error('Deezer API error:', err)
    res.status(500).json({ error: "Failed to fetch from Deezer"})
  }
})
export default router







