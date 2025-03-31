import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '../components_css/assets/bazar.jpg';
import Logo2 from '../components_css/assets/panaderia.jpg';
import Logo3 from '../components_css/assets/tiendaronnie.jpg';
import Logo4 from '../components_css/assets/fournuts.jpg';
import Logo5 from '../components_css/assets/intivibes.jpg';
import Logo6 from '../components_css/assets/polanco.png';

function Brands() {
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
  );
}

export default Brands; 