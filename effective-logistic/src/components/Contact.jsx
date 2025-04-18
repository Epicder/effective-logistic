import React, { useState } from 'react';
import './components_css/Main.css';
import { motion } from 'framer-motion'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <div className='contact-container'>
        <div className='contact-hero'>
          <div className='contact-hero-content'>
            <h1>Contáctanos</h1>
            <p>Estamos aquí para ayudarte con todas tus necesidades logísticas</p>
          </div>
        </div>

        <div className='contact-info-section'>
          <div className='contact-info-card'>
            <div className='contact-icon'>📍</div>
            <h3>Ubicación</h3>
            <p>Montevideo, Uruguay</p>
            <p></p>
          </div>
          <div className='contact-info-card'>
            <div className='contact-icon'>📞</div>
            <h3>Teléfono</h3>
            <p>091 952 742</p>

          </div>
          <div className='contact-info-card'>
            <div className='contact-icon'>✉️</div>
            <h3>Email</h3>
            <p>logisticaeffective <br />service@gmail.com</p>
            <p>Respondemos en menos de 24h</p>
          </div>
        </div>

        <div className='contact-form-section'>
          <div className='contact-form-container'>
            <h2>Envíanos un mensaje</h2>
            <p className='form-description'>Cuéntanos sobre tu proyecto y te responderemos a la brevedad</p>
            
            <form onSubmit={handleSubmit} className='contact-form'>
              <div className='form-group'>
                <label htmlFor="name">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                />
              </div>
              <div className='form-group'>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>
              <div className='form-group'>
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+598 XX XXX XXX"
                />
              </div>
              <div className='form-group'>
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe tu proyecto o consulta"
                />
              </div>
              <button type="submit" className='btn-main'>Enviar Mensaje</button>
            </form>
          </div>
        </div>

        <div className='contact-cta'>
          <h2>¿Prefieres contactarnos por WhatsApp?</h2>
          <p>Estamos disponibles para responder tus consultas de inmediato</p>
          <a href="https://wa.me/59891952742" target="_blank" rel="noreferrer" className='btn-main whatsapp-btn'>
            Chatear por WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact; 