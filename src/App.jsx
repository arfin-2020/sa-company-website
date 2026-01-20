import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about-us'
import Contact from './pages/contact'
import Projects from './pages/projects'
import './App.css'
import Nav from './pages/nav'
import ServicesPage from './pages/services'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
