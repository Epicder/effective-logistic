import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './components_css/Main.css';

function Main() {
  const words = ["rápidos", "efectivos", "seguros", "confiables", "convenientes"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);


  return (
    <>
      <div className='content'>
        <div className='parallax'>
          <div className='text-main'>
            <h1>Logística Effective</h1>
            <p className='text-main-p'>
              Somos los mejores y más 
              <span className='highlight'>&nbsp;
                <AnimatePresence mode="wait">
                  <motion.span 
                    key={words[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.5 }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span> 
              &nbsp;al enviar pedidos.
            </p>
              <a href="#contacto" className='btn-main'>Solicitá nuestro servicio</a>
          </div>
          
          
          <div className='wave'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#db3636" fillOpacity="1" d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,48C672,32,768,32,864,58.7C960,85,1056,139,1152,165.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>

        <div className='content-text'>
          <h1>¿Quiénes somos?</h1>
          <p>En Effective Logistic nos encargamos de llevar tu mercancía de manera segura y eficiente.</p>
          <p>Contamos con una amplia gama de servicios y con personal altamente capacitado para brindarte la mejor experiencia.</p>
          <p>¡Contáctanos y descubre por qué somos la mejor opción para tus envíos!</p>
        </div>
      </div>
    </>
  );
}

export default Main;
