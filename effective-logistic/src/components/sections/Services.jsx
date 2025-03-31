import React from 'react';

function Services() {
  return (
    <>
      <div className='services-section'>
        <h1 id='servicio'>Servicios</h1>
        <div className='services'>
          <div className='service'>
            <h2>Mercado Flex <br />🤝</h2>
          </div>
          <div className='service'>
            <h2>Envíos en el día <br />🌞</h2>
          </div>
          <div className='service'>
            <h2>Envíos coordinados <br />📲</h2>
          </div>
          <div className='service'>
            <h2>Flota de cadetes <br />🛵</h2>
          </div>
        </div>
      </div>
      <div className='services-text'>
        <p>            
          Somos tu <span className='highlight-3'>socio estratégico</span> en cada paso del proceso, <span className='highlight-3'>comprometidos con el éxito de tu negocio</span>. Nos
          encargamos de que cada envío, desde el momento de la recogida hasta la entrega final, 
          cumpla con los estándares de <span className='highlight-3'>calidad y puntualidad</span> que tus clientes merecen. 
          ¡Estamos aquí para impulsar tu crecimiento y asegurar que tus productos lleguen siempre como lo prometimos!
        </p>
      </div>
    </>
  );
}

export default Services; 