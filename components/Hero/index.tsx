import React from 'react';
import './Hero.css';

const msg = "Hugo Londoño abogado, amante del arte y de las expresiones artísticas como la escultura y arquitectura. Comencé a coleccionar desde muy temprana edad y mi afición por éste me convirtió con el paso de los años en dealer de arte. Pasado un tiempo decidí abrir un espacio en Centro Comercial Mazuren desde hace ya 5 años, llamado Trastalleres Galería de Arte, donde nos hemos propuesto al impulso de nuevas propuestas creativas hasta asesorar para la inversión en arte. Igualmente con el paso del tiempo nuestra galería ha fortalecido su colección particular. En este 2.025 nos hemos propuesto con fechas definidas realizar exposiciones en el Centro Cultural de Cajica.";

const Hero: React.FC = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content">
        <div className="hero-column">
          <img src="/image.png" alt="Hero Image" className="hero-image" />
        </div>
        <div className="hero-column">
          <h2>Find Art You Love</h2>
          <p>
            {msg}
          </p>
          <p>
            <em>Hugo Londoño</em><br />
          </p>
          {/* TODO: Add real wpp number and metadata here */}
          <button className="hero-button">Charlemos</button>

        </div>
      </div>
    </div>
  );
}

export default Hero;
