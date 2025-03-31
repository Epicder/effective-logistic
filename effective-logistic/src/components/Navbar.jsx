import React from 'react'
import { Link } from 'react-router-dom'
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
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/tarifas-y-servicios">Tarifas y servicios</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><a href="/#servicio">Servicio</a></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar