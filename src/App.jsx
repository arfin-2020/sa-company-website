import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about-us'
import Contact from './pages/contact'
import Services from './pages/services'
import Projects from './pages/projects'
import './App.css'
import Nav from './pages/nav'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
