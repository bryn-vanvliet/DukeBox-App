// import { Songs } from './SongList'
import Nav from './Nav'
import { DeezerSearch } from './Search'


function App() {
  return (
    <>
      <header className="header">
      </header>
      <section className="main">
        <Nav />
        {/* <Songs /> */}
        <DeezerSearch />
      </section>
    </>
  )
}

export default App
