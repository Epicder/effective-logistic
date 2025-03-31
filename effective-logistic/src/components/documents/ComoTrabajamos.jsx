import React from 'react';

function ComoTrabajamos() {
  return (
    <div className="document-container">
      <section className="document-section">
        <h3>Nuestro Proceso</h3>
        <div className="proceso-grid">
          <div className="proceso-card">
            <div className="proceso-numero">1</div>
            <h4>Solicitud</h4>
            <p>Recibimos tu pedido a través de WhatsApp o formulario de contacto</p>
          </div>
          <div className="proceso-card">
            <div className="proceso-numero">2</div>
            <h4>Coordinación</h4>
            <p>Asignamos el cadete más cercano y coordinamos el retiro</p>
          </div>
          <div className="proceso-card">
            <div className="proceso-numero">3</div>
            <h4>Seguimiento</h4>
            <p>Te mantenemos informado del estado de tu envío en tiempo real</p>
          </div>
          <div className="proceso-card">
            <div className="proceso-numero">4</div>
            <h4>Entrega</h4>
            <p>Confirmamos la entrega con foto y firma digital</p>
          </div>
        </div>
      </section>

      <section className="document-section">
        <h3>Métodos de Trabajo</h3>
        <div className="metodos-grid">
          <div className="metodo-card">
            <h4>Envíos en el Día</h4>
            <ul>
              <li>Retiro inmediato al recibir el pedido</li>
              <li>Entrega en el mismo día</li>
              <li>Seguimiento en tiempo real</li>
              <li>Confirmación fotográfica</li>
            </ul>
          </div>
          <div className="metodo-card">
            <h4>Envíos Programados</h4>
            <ul>
              <li>Agenda el día y horario</li>
              <li>Retiros y entregas coordinados</li>
              <li>Ideal para eventos y fechas especiales</li>
              <li>Notificaciones anticipadas</li>
            </ul>
          </div>
          <div className="metodo-card">
            <h4>Flota Dedicada</h4>
            <ul>
              <li>Cadetes exclusivos para tu negocio</li>
              <li>Horarios personalizados</li>
              <li>Uniforme corporativo opcional</li>
              <li>Reportes detallados</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="document-section">
        <h3>Garantías de Servicio</h3>
        <div className="garantias-container">
          <div className="garantia-item">
            <h4>Seguridad</h4>
            <p>Todos nuestros envíos están asegurados y nuestros cadetes están verificados</p>
          </div>
          <div className="garantia-item">
            <h4>Puntualidad</h4>
            <p>Compensación por retrasos superiores a 30 minutos en envíos express</p>
          </div>
          <div className="garantia-item">
            <h4>Satisfacción</h4>
            <p>Garantía de devolución si no estás conforme con nuestro servicio</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ComoTrabajamos; 