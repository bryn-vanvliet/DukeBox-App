import { ArtistData } from '../../models/artist'
import { SongData } from '../../models/songs'
import connection from './connection'

// CRUD operations

// Create
// Read

export async function getAllSongs() {
  const result: SongData[] = await connection('songs').select(
    'id',
    'name',
    'artist_id as artistId',
    'year_released as yearReleased',
    'url',
    'artwork',
  )
  return result
}
export async function getAllArtists() {
  const result: ArtistData[] = await connection('artist').select(
    'id',
    'name',
    'country',
  )
  return result
}

// Update
// Delete
