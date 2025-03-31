import React from 'react';
import './components_css/Main.css';
import './components_css/Documents.css';

function TarifasYServicios() {
  return (
    <div className='tarifas-container'>
      <div className='tarifas-hero'>
        <div className='tarifas-hero-content'>
          <h1>Tarifas y Servicios</h1>
          <p>Descubre nuestras opciones flexibles y competitivas para tu negocio</p>
        </div>
      </div>

      <div className='tarifas-features'>
        <div className='tarifa-card'>
          <div className='tarifa-icon'>🚚</div>
          <h3>Zonas de reparto</h3>
          <p>Descubre las zonas de reparto y los precios por zona</p>
        </div>
        <div className='tarifa-card'>
          <div className='tarifa-icon'>📦</div>
          <h3>Envios coordinados</h3>
          <p>Envios programados y coordinados</p>
        </div>
        <div className='tarifa-card'>
          <div className='tarifa-icon'>🛵</div>
          <h3>Flota Dedicada</h3>
          <p>Servicio exclusivo para tu empresa</p>
        </div>
      </div>

      <div className='tarifas-details'>
        <h2>Detalles de Tarifas y Zonas</h2>
        <div className='tarifas-content'>
          <details>
            <summary>Conocé sobre nuestras tarifas & Zona de entregas</summary>
            <div className="document-section">
              <h3>Tarifas y Zonas</h3>
              <div className="pdf-viewer">
                <iframe
                  src="/tarifas-y-zonas.pdf"
                  title="Tarifas y Zonas"
                  className="pdf-iframe"
                />
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className='tarifas-how-we-work'>
        <h2>¿Cómo Trabajamos?</h2>
        <div className='tarifas-content'>
          <details>
            <summary>¡Conocé más sobre como trabajamos!</summary>
            <div className="document-section">
              <h3>Cómo Trabajamos</h3>
              <div className="pdf-viewer">
                <iframe
                  src="/como-trabajamos.pdf"
                  title="Cómo Trabajamos"
                  className="pdf-iframe"
                />
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className='tarifas-cta'>
        <h2>¿Listo para comenzar?</h2>
        <p>Contáctanos para obtener una cotización personalizada</p>
        <a href="/contacto" className='btn-main'>Solicitar Cotización</a>
      </div>
    </div>
  );
}

export default TarifasYServicios; 