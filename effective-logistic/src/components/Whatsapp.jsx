import React from 'react'
import Wsp from './components_css/assets/whatsapp.png'
import './components_css/Whatsapp.css'

function Whatsapp() {
  return (
    <div className='whatsapp'>
      <a href='https://wa.me/' target='_blank' rel='noreferrer'>
        <img src={Wsp} alt='Whatsapp'/>
        </a>
    </div>
  )
}

export default Whatsapp