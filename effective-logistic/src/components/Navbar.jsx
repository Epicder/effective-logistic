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
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Servicio</li>
            <li>Contacto</li>
        </ul>
    </div>
    </>
    
  )
}

export default Navbar