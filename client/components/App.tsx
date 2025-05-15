// import { Songs } from './SongList'
// import { TbPlaystationTriangle } from 'react-icons/tb'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { DeezerSearch } from './Search'
import { PlaySong } from './PlaySong'
import { Playlist } from './Playlists'



function App() {
  return (
    <>
      <header className="header">
      
      <Nav />
      </header>
      <section className="main">
       <Routes>
        <Route path="/" element={<DeezerSearch />} />
        {/* <Route path="/search" element={<DeezerSearch />} /> */}
        <Route path="/play/:id" element={<PlaySong />} />
        <Route path="/Playlist" element={<Playlist />} />
       </Routes>
       
      </section>
    </>
  )
}

export default App
