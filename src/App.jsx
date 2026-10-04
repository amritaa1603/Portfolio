import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from "./components/Projects"
import Cert from "./components/Cert"
import Footer from './components/Footer'
import Recognition from './components/Recognition'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Home /><About /><Projects /><Cert /><Recognition /></>} />
       
      
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App