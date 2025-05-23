// import { Songs } from './SongList'
// import { TbPlaystationTriangle } from 'react-icons/tb'
import { Route, Routes } from 'react-router-dom'
import Nav from './Nav'
import { DeezerSearch } from './Search'
import { PlaySong } from './PlaySong'
import { PlaylistView } from './PlaylistView'
// import AuthButtons from './Auth'
import Protected from './Protected'
import Login from './Login'
import Profile from '/Profile'


function App() {
  return (
    <>
      <header className="header">
        <Nav />
      </header>

      <section className="main">
        <Protected>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<DeezerSearch />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/search" element={<DeezerSearch />} /> */}
            <Route path="/play/:id" element={<PlaySong />} />
            <Route path="/Playlist" element={<PlaylistView />} />
            <Route path="/Playlist/:selectedId" element={<PlaylistView />} />
          </Routes>
        </Protected>
      </section>
    </>
  )
}

export default App
