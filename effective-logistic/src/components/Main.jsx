import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './components_css/Main.css';
import Delivery1 from './components_css/assets/delivery2.png';
import Logo from './components_css/assets/bazar.jpg';
import Logo2 from './components_css/assets/panaderia.jpg';
import Logo3 from './components_css/assets/tiendaronnie.jpg';
import Logo4 from './components_css/assets/fournuts.jpg';
import Logo5 from './components_css/assets/intivibes.jpg';
import Logo6 from './components_css/assets/polanco.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Main() {
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
    <>
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
              <a href="#contacto" className='btn-main'>Solicitá nuestro servicio</a>
          </div>
        </div>
        <div className='content-wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#db3636" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,58.7C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            <div className='content-text'>
          <h1 id="sobre-nosotros">¿Quiénes somos?</h1>
          <p>¡Bienvenidos a Logística effective! 📦<br />
          <br />
Somos una empresa con <span className='highlight-2'>experiencia</span> en logística y cadetería, especializada en ofrecer soluciones
<span className='highlight-2'> rápidas, seguras y eficientes </span> para el transporte y entrega de tus productos y documentos.
Ya sea que necesites un servicio de mensajería urgente, entregas locales o flota de cadetes para tu negocio,
estámos listos para <span className='highlight-2'>ayudarte</span>.

¡Contáctanos hoy y descubre cómo podemos facilitar tu logística!
</p>
        </div>
          </div>
        <div className='content-images'>
        <svg viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150" className='service-wave'><path d="M 0,600 L 0,150 C 103.21531100478472,120.02870813397129 206.43062200956945,90.05741626794259 311,100 C 415.56937799043055,109.94258373205741 521.4928229665071,159.79904306220095 605,188 C 688.5071770334929,216.20095693779905 749.5980861244019,222.7464114832536 851,216 C 952.4019138755981,209.2535885167464 1094.1148325358852,189.21531100478467 1199,176 C 1303.8851674641148,162.78468899521533 1371.9425837320573,156.39234449760767 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#db3636" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 300)"></path><path d="M 0,600 L 0,350 C 89.96172248803828,356.3636363636364 179.92344497607655,362.7272727272727 265,351 C 350.07655502392345,339.2727272727273 430.26794258373207,309.45454545454544 535,303 C 639.7320574162679,296.54545454545456 769.0047846889952,313.45454545454544 873,331 C 976.9952153110048,348.54545454545456 1055.7129186602872,366.72727272727275 1146,370 C 1236.2870813397128,373.27272727272725 1338.1435406698565,361.6363636363636 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="#db3636" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-1" transform="rotate(-180 720 300)"></path></svg>
          <div className='carousel'>
            <img src={Delivery1} alt="" />
          </div>
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
        </div>
        <div className='services-text'>
          <p>            
Somos tu <span className='highlight-3'>socio estratégico</span> en cada paso del proceso, <span className='highlight-3'>comprometidos con el éxito de tu negocio</span>. Nos
 encargamos de que cada envío, desde el momento de la recogida hasta la entrega final, 
cumpla con los estándares de <span className='highlight-3'>calidad y puntualidad</span> que tus clientes merecen. 
¡Estamos aquí para impulsar tu crecimiento y asegurar que tus productos lleguen siempre como lo prometimos!
          </p>
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
      <div className='contact-section' id='contacto'>
        <h1>¿Te interesa Nuestro servicio?</h1>
        <a href="#contacto" className='btn-main'>Contáctanos</a>
        <details>
          <summary>Conocé sobre nuestras tarifas & Zona de entregas</summary>
          <iframe src="https://docs.google.com/document/d/1AL8VEnznwGl2NhL0lAoFj0-kpNamNyZI/edit?usp=sharing&ouid=111948878459454852790&rtpof=true&sd=true" width="100%" height="700px"></iframe>
        </details>
        <details>
          <summary>¡Conocé más sobre como trabajamos!</summary>
            <iframe src="https://docs.google.com/document/d/1nN6fs0QlQXOLCC04x3Ndg6e5roM7Yy3b/edit?usp=sharing&ouid=111948878459454852790&rtpof=true&sd=true" width="100%" height="700px"></iframe>
        </details>
      </div>
      <footer>
        <p>© 2025 Logística Effective. Todos los derechos reservados.</p>
        <p>Correo: <br />
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </p>
        <p>Teléfono: <br />
          <a href="tel:+5491155555555">+54 9 11 5555-5555</a>
        </p>
        <p>Redes: <br />
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a> | <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a> | <a href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        </p>
      </footer>
      </div>
    </>
  );
}

export default Main;