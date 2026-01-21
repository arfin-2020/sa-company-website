import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about-us'
import './App.css'
import Nav from './pages/nav'
import ServicesPage from './pages/services'
import ProjectPage from './pages/projects'
import Footer from './pages/Footer'
import HomeContact from './pages/HomeContact'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/contact" element={<HomeContact />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
