import React from 'react';
import './components_css/Main.css';
import Delivery1 from './components_css/assets/delivery2.png';

function SobreNosotros() {
  return (
    <div className='sobre-nosotros-container'>
      <div className='sobre-nosotros-hero'>
        <div className='sobre-nosotros-content'>
          <h1>¿Quiénes somos?</h1>
          <p className='hero-text'>¡Bienvenidos a Logística effective! 📦<br /><br />
            Somos una empresa con <span className='highlight-2'>experiencia</span> en logística y cadetería, especializada en ofrecer soluciones
            <span className='highlight-2'> rápidas, seguras y eficientes </span> para el transporte y entrega de tus productos y documentos.
            Ya sea que necesites un servicio de mensajería urgente, entregas locales o flota de cadetes para tu negocio,
            estamos listos para <span className='highlight-2'>ayudarte</span>.<br /><br />
            ¡Contáctanos hoy y descubre cómo podemos facilitar tu logística!</p>
        </div>
      </div>

      <div className='sobre-nosotros-features'>
        <div className='feature-card'>
          <div className='feature-icon'>🚀</div>
          <h3>Experiencia Comprobada</h3>
          <p>Años de servicio en el mercado, entregando excelencia en cada envío.</p>
        </div>
        <div className='feature-card'>
          <div className='feature-icon'>💪</div>
          <h3>Equipo Profesional</h3>
          <p>Personal capacitado y comprometido con la calidad del servicio.</p>
        </div>
        <div className='feature-card'>
          <div className='feature-icon'>🎯</div>
          <h3>Compromiso con la Calidad</h3>
          <p>Garantizamos la integridad y seguridad de tus envíos.</p>
        </div>
      </div>

      <div className='sobre-nosotros-values'>
        <h2>Nuestros Valores</h2>
        <div className='values-grid'>
          <div className='value-item'>
            <h3>Puntualidad</h3>
            <p>Entregamos en tiempo y forma, respetando los compromisos.</p>
          </div>
          <div className='value-item'>
            <h3>Confianza</h3>
            <p>Construimos relaciones duraderas basadas en la confianza.</p>
          </div>
          <div className='value-item'>
            <h3>Innovación</h3>
            <p>Buscamos constantemente mejorar nuestros servicios.</p>
          </div>
        </div>
      </div>

      <div className='sobre-nosotros-cta'>
        <h2>¿Listo para comenzar?</h2>
        <p>Únete a nuestros clientes satisfechos y descubre la diferencia.</p>
        <a href="/contacto" className='btn-main'>Contáctanos Ahora</a>
      </div>
    </div>
  );
}

export default SobreNosotros; 