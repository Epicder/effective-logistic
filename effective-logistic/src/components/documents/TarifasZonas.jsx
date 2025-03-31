import React from 'react';

function TarifasZonas() {
  return (
    <div className="document-container">
      <section className="document-section">
        <h3>Tarifas Base</h3>
        <div className="tarifa-table">
          <div className="tarifa-row header">
            <div className="tarifa-cell">Zona</div>
            <div className="tarifa-cell">Precio Base</div>
            <div className="tarifa-cell">Tiempo Estimado</div>
          </div>
          <div className="tarifa-row">
            <div className="tarifa-cell">CABA</div>
            <div className="tarifa-cell">$2500</div>
            <div className="tarifa-cell">2-3 horas</div>
          </div>
          <div className="tarifa-row">
            <div className="tarifa-cell">GBA Norte</div>
            <div className="tarifa-cell">$3000</div>
            <div className="tarifa-cell">3-4 horas</div>
          </div>
          <div className="tarifa-row">
            <div className="tarifa-cell">GBA Sur</div>
            <div className="tarifa-cell">$3000</div>
            <div className="tarifa-cell">3-4 horas</div>
          </div>
          <div className="tarifa-row">
            <div className="tarifa-cell">GBA Oeste</div>
            <div className="tarifa-cell">$3000</div>
            <div className="tarifa-cell">3-4 horas</div>
          </div>
        </div>
      </section>

      <section className="document-section">
        <h3>Zonas de Cobertura</h3>
        <div className="zonas-grid">
          <div className="zona-card">
            <h4>CABA</h4>
            <p>Cobertura en todos los barrios de la Ciudad Autónoma de Buenos Aires</p>
          </div>
          <div className="zona-card">
            <h4>GBA Norte</h4>
            <p>Vicente López, San Isidro, San Fernando, Tigre</p>
          </div>
          <div className="zona-card">
            <h4>GBA Sur</h4>
            <p>Avellaneda, Lanús, Lomas de Zamora, Quilmes</p>
          </div>
          <div className="zona-card">
            <h4>GBA Oeste</h4>
            <p>La Matanza, Morón, Tres de Febrero, San Martín</p>
          </div>
        </div>
      </section>

      <section className="document-section">
        <h3>Servicios Adicionales</h3>
        <div className="servicios-adicionales">
          <div className="servicio-adicional">
            <h4>Envío Express</h4>
            <p>+50% sobre tarifa base</p>
            <p>Entrega en 1-2 horas</p>
          </div>
          <div className="servicio-adicional">
            <h4>Envío Programado</h4>
            <p>+30% sobre tarifa base</p>
            <p>Elige tu horario de entrega</p>
          </div>
          <div className="servicio-adicional">
            <h4>Seguro Extendido</h4>
            <p>+10% sobre tarifa base</p>
            <p>Cobertura hasta $100,000</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TarifasZonas; 