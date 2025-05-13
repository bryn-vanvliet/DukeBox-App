export interface SongData {
  artist: ReactNode
  id(id: any): void
  title: ReactNode
  name: string
  artistId: number
  yearReleased: string
  url: string
  artwork: string
}

export interface Song extends SongData {
  id: number
}