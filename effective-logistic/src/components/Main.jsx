import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './components_css/Main.css';
import Delivery1 from './components_css/assets/delivery2.png';
import Delivery2 from './components_css/assets/delivery.jpg';
import Logo from './components_css/assets/bazar.jpg';
import Logo2 from './components_css/assets/panaderia.jpg';
import Logo3 from './components_css/assets/tiendaronnie.jpg';
import Logo4 from './components_css/assets/fournuts.jpg';
import Logo5 from './components_css/assets/intivibes.jpg';
import Logo6 from './components_css/assets/polanco.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Main = () => {
  const words = ["rápidos", "efectivos", "seguros", "confiables", "convenientes"];
  const [index, setIndex] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className='content'>
        <div className='parallax1'></div>
        <div className='parallax'>
          <div className='text-main'>
            <h1 id="inicio">Logística Effective</h1>
            <p className='text-main-p'>
            Somos una empresa con <span className='highlight-2'>experiencia</span> en logística y cadetería, especializada en ofrecer soluciones
<span className='highlight-2'> rápidas, seguras y eficientes </span> para el transporte y entrega de tus productos y documentos.
Ya sea que necesites un servicio de mensajería urgente, entregas locales o flota de cadetes para tu negocio,
estámos listos para <span className='highlight-2'>ayudarte</span>.
¡Contáctanos hoy y descubre cómo podemos facilitar tu logística!
            </p>
              <Link to="/contacto" className='btn-main'>Solicitá nuestro servicio</Link>
          </div>
        </div>
        <div className='wave-section'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path 
              fill="#0B243Aff"
              d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,58.7C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
            <div className='content-text'>
          <h2 id="sobre-nosotros">¿Quiénes somos?</h2>
            <p className='content-text-p'>¿No te quedó claro quiénes somos?</p>
          <Link to="/sobre-nosotros" className='btn-main-2'>Conocé más sobre nosotros</Link>
          </div>
          
        <div className='services-section'>
          <h1 id='servicio'>Servicios</h1>
          <div className='services'>
            <div className='service'>
              <h2>Mercado Flex <br />🤝
              </h2>
            </div>
            <div className='service'>
              <h2>Envíos en el día <br />
              🌞</h2>
            </div>
            <div className='service'>
              <h2>Envíos coordinados <br />
              📲</h2>
            </div>
            <div className='service'>
              <h2>Flota de cadetes <br />
              🛵</h2>
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
        </div>
        <div className='brands-section'>
        <h1>¿Quiénes confían en nosotros?</h1>
        <Slider {...settings} className='brands'>
          <div className='brand'>
            <img src={Logo} alt="Logo Bazar" />
          </div>
          <div className='brand'>
            <img src={Logo2} alt="Logo Directv" />
          </div>
          <div className='brand'>
            <img src={Logo3} alt="Logo Tienda Ronnie" />
          </div>
          <div className='brand'>
            <img src={Logo4} alt="Logo Fournuts" />
          </div>
          <div className='brand'>
            <img src={Logo5} alt="Logo Intivibes" />
          </div>
          <div className='brand'>
            <img src={Logo6} alt="Logo Polanco" />
          </div>
        </Slider>
        <p>¡Estas son solo una <span className='highlight-3'>pequeña parte</span> de las
        empresas que trabajan con nosotros, la tuya podría ser
        <br/>LA MÁS GRANDE!</p>
      </div>
      <div className='contact-section'>
        <h1>Contáctanos</h1>
        <p>¿Te interesó lo que leíste? <br />
        ¡Contáctanos haciendo click en el botón de abajo!</p>
        <Link to="/contacto" className='btn-main'>Contáctanos</Link>
      </div>
      <footer>
        <p>© 2025 Logística Effective. Todos los derechos reservados.</p>
        <p>Correo: <br />
          <a href="mailto:logisticaeffectiveservice@gmail.com">logisticaeffectiveservice@gmail.com</a>
        </p>
        <a href="https://instagram.com/effective.service" target="_blank" rel="noopener noreferrer">Instagram 📸</a>
        <br />
        <br />
        <a href="https://www.facebook.com/effective.service" target="_blank" rel="noopener noreferrer">Facebook 🔗</a>
        <p>Teléfono: <br />
          <a href="tel:+598 91 952 742">091 952 742</a>
        </p>
      </footer>
      </div>
    </motion.div>
  );
}

export default Main;