import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const Navbar: React.FC = () => {
  const whatsappUrl = "https://wa.me/573102104501?text=Hola%2C%20Trastalleres!%20Tengo%20una%20pregunta";
    return (
    <nav className="bg-transparent p-1">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-h-[130px] max-h-16 my-1">
        <Link href="/">
            <Image className="logo" src="/images/logo-trastalleres.png" alt="Logo Trastalleres" width={200} height={150} />
        </Link>
        <ul className="flex nav-links items-center">
          <li>
            <Link href="/galeria">
              <span className="text-black hover:text-gray-400 cursor-pointer">Galería</span>
            </Link>
          </li>
          <li className="justify-center">
            <Link href="/libreria">
              <span className="text-black hover:text-gray-400 cursor-pointer justify-center">Librería</span>
            </Link>
          </li>
          <li>
            <Link className="flex contact-link cursor-pointer" href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{display: 'flex', alignItems: 'center', maxWidth: '8rem'}}>
              Contáctanos <FontAwesomeIcon icon={faWhatsapp} height={12} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;