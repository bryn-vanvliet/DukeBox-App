// import { Songs } from './SongList'
// import { TbPlaystationTriangle } from 'react-icons/tb'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { DeezerSearch } from './Search'
import { PlaySong } from './PlaySong'
import { PlaylistView } from './PlaylistView'
import AuthButtons from './Auth'
import Protected from './Protected'



function App() {
  return (
    <>
 
    
      <header className="header">
      
      <Nav />
      </header>
      
      <section className="main">
      <Protected>
       <Routes>
        <Route path="/" element={<DeezerSearch />} />
        {/* <Route path="/search" element={<DeezerSearch />} /> */}
        <Route path="/play/:id" element={<PlaySong />} />
        <Route path="/Playlist" element={<PlaylistView />} />
       </Routes>
       </Protected>
      </section>
    </>
  )
}

export default App


