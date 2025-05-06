import { createRoutesFromElements, Route } from 'react-router-dom'

// import Layout from './components/Layout'
import Home from './pages/Home.tsx'
import AddASong from './pages/AddASong.tsx'
import Catalogue from './pages/Catalogue.tsx'


export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="/add-a-song" element={<AddASong />} />
  <Route path="/catalogue" element={<Catalogue />} />

  </Route>
)

//why aren't these importing? Did i miss an install?