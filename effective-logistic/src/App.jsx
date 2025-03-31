import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import TarifasYServicios from './components/TarifasYServicios'
import Contact from './components/Contact'
import SobreNosotros from './components/SobreNosotros'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/tarifas-y-servicios" element={<TarifasYServicios/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
      </Routes>
      <Whatsapp/>
    </Router>
  )
}

export default App
