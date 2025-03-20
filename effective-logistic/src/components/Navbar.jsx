import React from 'react'
import './components_css/Navbar.css'
import LogoBrand from './components_css/assets/logo.jpg';
function Navbar() {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <img src={LogoBrand} alt="logo" />
        </div>
        <ul>
        <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#servicio">Servicio</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
    </div>
    </>
    
  )
}

export default Navbar