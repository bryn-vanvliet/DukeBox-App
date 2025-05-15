export interface SongData {
  id: number
  title: string
  artist: {
    name: string
  } 
  album: {
    title: string

    cover: string
    cover_small: string
    cover_big: string
  }
  preview: string
  duration: number
}
