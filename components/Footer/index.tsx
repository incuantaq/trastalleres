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
          <img
              src="/images/logo-trastalleres-light-blue.png" 
              alt="Trastalleres Galería Logo"
              className="footer-name_text"
            />
          <address className='footer-info'>
            <ul>
              <li>Galería y librería</li>
              <li>C.C. Mazuren Local 249 - Bogotá</li>
              <li>+57 3102104501</li>
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
      <div className='footer-social-lower'>
        <div className='footer-social-lower--icons'>
          <a className='icon' href="https://www.facebook.com/Trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} height={15} />
          </a>
          <a className='icon' href="https://www.instagram.com/trastalleresgaleria/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} height={15} />
          </a>
          
        </div>
        <div className='footer-social-lower--branding'>
          Made with ❤ by 
            <img
              src="/images/incuantaq.png" 
              alt="Incuantaq logo - page creators"
              className="incuantaq-logo"
            />
        </div>
      </div>
    </footer>
  );
}

export default Footer;