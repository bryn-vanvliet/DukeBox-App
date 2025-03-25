export interface SongData {
  id: number
  name: string
  artistId: number
  yearReleased: string
  url: string
  artwork: string
}

export interface Song extends SongData {
  id: number
}