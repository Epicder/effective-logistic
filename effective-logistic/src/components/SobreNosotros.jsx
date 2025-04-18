import React from 'react';
import './components_css/Main.css';
import Delivery1 from './components_css/assets/delivery2.png';
import { motion } from 'framer-motion'

function SobreNosotros() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className='sobre-nosotros-container'>
        <div className='sobre-nosotros-hero'>
          <div className='sobre-nosotros-content'>
            <h1>¿Quiénes somos?</h1>
            <p className='hero-text'>
                En <span className='highlight-2'>cadeteria efective</span>, somos una empresa de cadetería y logística en constante
                crecimiento, nacida con el propósito de ofrecer <span className='highlight-2'>soluciones ágiles y efectivas</span> a las
                necesidades de transporte y entrega de nuestros clientes. Comenzamos nuestra trayectoria
                en plena pandemia, un desafío que nos impulsó a adaptarnos rápidamente y a ofrecer un
                <span className='highlight-2'> servicio flexible, confiable y de calidad</span> en tiempos difíciles.
                Nuestra misión es <span className='highlight-3'>garantizar la satisfacción total</span> de nuestros clientes, por lo que nos
                enfocamos en mantener una comunicación fluida y constante, asegurándonos de que cada
                pedido sea gestionado de manera eficiente y con la atención que merece. Nos destacamos
                por nuestra <span className='highlight-2'>flexibilidad</span>, adaptándonos a las necesidades específicas de cada cliente y
                brindando respuestas rápidas ante cualquier imprevisto.
                En <span className='highlight-2'>cadeteria efective</span>, sabemos que el éxito de tu negocio depende de la <span className='highlight-2'>puntualidad y
                seguridad</span> en cada entrega, por eso estamos comprometidos a seguir creciendo y
                mejorando cada día para ofrecerte siempre el mejor servicio. ¡Tu confianza es nuestra
                mayor recompensa!
            </p>
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
    </motion.div>
  );
}

export default SobreNosotros; 