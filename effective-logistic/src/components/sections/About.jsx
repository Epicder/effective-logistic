import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className='content-wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#db3636" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,58.7C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className='content-text'>
          <h1 id="sobre-nosotros">¿Quiénes somos?</h1>
          <p>¡Bienvenidos a Logística effective! 📦<br /><br />
            Somos una empresa con <span className='highlight-2'>experiencia</span> en logística y cadetería, especializada en ofrecer soluciones
            <span className='highlight-2'> rápidas, seguras y eficientes </span> para el transporte y entrega de tus productos y documentos.
            Ya sea que necesites un servicio de mensajería urgente, entregas locales o flota de cadetes para tu negocio,
            estamos listos para <span className='highlight-2'>ayudarte</span>.<br /><br />
            ¡Contáctanos hoy y descubre cómo podemos facilitar tu logística!</p>
        </div>
      </div>
    </motion.div>
  );
}

export default About; 