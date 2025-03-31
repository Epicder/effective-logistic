import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='parallax'>
      <div className='text-main'>
        <h1 id="inicio">Logística Effective</h1>
        <p className='text-main-p'>
          Somos una empresa con <span className='highlight-2'>experiencia</span> en logística y cadetería, especializada en ofrecer soluciones
          <span className='highlight-2'> rápidas, seguras y eficientes </span> para el transporte y entrega de tus productos y documentos.
          Ya sea que necesites un servicio de mensajería urgente, entregas locales o flota de cadetes para tu negocio,
          estamos listos para <span className='highlight-2'>ayudarte</span>.
          <br /><br />
          ¡Contáctanos hoy y descubre cómo podemos facilitar tu logística!
        </p>
        <Link to="/contacto" className='btn-main'>Solicitá nuestro servicio</Link>
      </div>
    </div>
  );
}

export default Hero; 