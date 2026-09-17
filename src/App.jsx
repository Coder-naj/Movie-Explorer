
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieListing from './pages/MovieListing'
import MouseFollower from './components/MouseFollower'

export default function App() {
  return (
    <div>
      <MouseFollower />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<MovieListing />} />
    </Routes>
    </div>
  )
}
