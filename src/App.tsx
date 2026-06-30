import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/resume" element={<Resume />} /> */}
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/more-about-me" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}