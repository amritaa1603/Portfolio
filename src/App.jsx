import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from "./pages/Projects"

import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><About /></>} />
        <Route path="/projects" element={<Projects />} />
      
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App