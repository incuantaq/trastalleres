import React from 'react';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { w } from '@faker-js/faker/dist/airline-BcEu2nRk';

const Hero: React.FC = () => {
  const whatsappUrl = "https://wa.me/573102104501?text=Hola%2C%20Trastalleres!%20Tengo%20una%20pregunta";
  
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-column">
          <img src="/curador.png" alt="Hugo Londoño, curador de Trastalleres" className="hero-image" />
        </div>
        <div className="hero-column">
          <h2>Descubre el Arte Que Te Inspira</h2>
          <p>
            En Trastalleres Galería de Arte, nos dedicamos a promover propuestas artísticas emergentes, desde la escultura hasta la arquitectura. Fundada por Hugo Londoño, un apasionado coleccionista y dealer de arte, nuestra galería forma parte del Centro Comercial Mazuren desde hace 5 años. Nuestro objetivo es apoyar nuevas expresiones creativas y asesorar sobre la inversión en arte. En 2025, tenemos previsto realizar exposiciones definidas en el Centro Cultural de Cajicá, enriqueciendo aún más nuestra colección única.
          </p>
          <p>
            <img src="/firma.png" alt="Firma de Hugo Londoño" className="signature-image" />
            <em>Hugo Londoño</em><br />
            Curador Director, Abogado
          </p>
            <a className="contact-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', maxWidth: '8rem'}}>
              Contáctame <FontAwesomeIcon icon={faWhatsapp} height={10}/>
            </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
