import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Whatsapp from './components/Whatsapp'
import TarifasYServicios from './components/TarifasYServicios'
import Contact from './components/Contact'
import SobreNosotros from './components/SobreNosotros'

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main/>} />
        <Route path="/tarifas-y-servicios" element={<TarifasYServicios/>} />
        <Route path="/contacto" element={<Contact/>} />
        <Route path="/sobre-nosotros" element={<SobreNosotros/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar/>
      <AnimatedRoutes />
      <Whatsapp/>
    </Router>
  )
}

export default App
