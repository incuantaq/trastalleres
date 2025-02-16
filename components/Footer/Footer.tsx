import React from 'react';
import Link from 'next/link';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <section className='footer-left'>
          <h2 className='footer-name_text'>Trastalleres</h2>
          <address className='footer-info'>
            <ul>
              <li>Galeria y libreria</li>
              <li>125 Calle av bogota 123</li>
              <li>+57 3004444444</li>
            </ul>
          </address>
        </section>
        <section className='footer-right'>
          <nav className='footer-links'>
            <h3 className='footer-links_title title'>Links</h3>
            <div className='footer-links_list content'>
              <Link className="link" href="/"> Home </Link>
              <Link className="link" href="/galeria"> Galería </Link>
              <Link className="link" href="/libreria"> Librería </Link>
            </div>
          </nav>
          <div className='footer-social'>
            <h3 className='footer-social_title title'>Social</h3>
            <div className='content'>
              <a className='link' href="https://www.facebook.com/Trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a className='link' href="https://www.instagram.com/trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className='footer-socialIcons'>
        <a className='icon' href="https://www.facebook.com/Trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className='icon' href="https://www.instagram.com/trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;