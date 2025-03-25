import { ArtistData } from '../../models/artist'
import { SongData, Song } from '../../models/songs'
import connection from './connection'

// CRUD operations

// Create

export async function addSong(data: SongData) {
  const { name, artistId, yearReleased, url, artwork } = data

  const newSong = {
    name,
    artist_id: artistId,
    year_released: yearReleased,
    url,
    artwork,
  }
  const results = await connection('songs').insert(newSong)
  return results
}
export async function addArtist(data: ArtistData) {
  const { name, country } = data

  const newArtist = {
    name,
    country,
  }
  const results = await connection('songs').insert(newArtist)
  return results
}

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

export async function updateSong(updatedSong: Song) {
  const song: SongData[] = await connection('songs').where(
    'songs.id', updatedSong.id)
.update('name', updatedSong.name)
.update('url', updatedSong.url)
.update('artwork', updatedSong.artwork)
.update('yearReleased', updatedSong.yearReleased)


return song
  
}

// Delete

export async function deleteSong(id: number) {
  const results = await connection('songs').del().where('songs.id', id)
  return results
}
