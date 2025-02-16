import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "./Navbar.css";

const Navbar: React.FC = () => {
  const whatsappUrl = "https://wa.me/573102104501?text=Hola.%20Tengo%20una%20pregunta";
    return (
    <nav className="bg-gray-200 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
            <Image className="logo" src="/images/logo-trastalleres.png" alt="My Image" width={150} height={300} />
        </Link>
        <ul className="flex nav-links">
          <li>
            <Link href="/galeria">
              <span className="text-black hover:text-gray-800 cursor-pointer">Galería</span>
            </Link>
          </li>
          <li>
            <Link href="/libreria">
              <span className="text-black hover:text-gray-300 cursor-pointer">Librería</span>
            </Link>
          </li>
          <li>
            <Link className="flex contact-link cursor-pointer" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Contact <FontAwesomeIcon icon={faWhatsapp} height={25} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;