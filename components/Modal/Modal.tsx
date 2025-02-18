import React, { useEffect } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

type ServiceKeys = 'libreria' | 'galeria';
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imgSrc: string;
    artworkName: string;
    artistName: string;
    description: string;
    serviceType: ServiceKeys;
}

const whatsappItemMessage = {
    libreria: "%C3%A9ste%20libro%3A%20",
    galeria: "%C3%A9sta%20pieza%20de%20arte%3A%20",
} 

const Modal: React.FC<ModalProps> = (ModalProps : ModalProps) => {
    const { isOpen, onClose, imgSrc, artworkName, artistName, description, serviceType } = ModalProps;

    
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    const whatsappUrl = `https://wa.me/573102104501?text=Hola%2C%20Trastalleres!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20${whatsappItemMessage[serviceType]}%20${artworkName}%0AArtist:%20${artistName}`;

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={handleBackgroundClick} role="dialog" aria-modal="true">
            <div className="modal-content">
                <figure className="modal-image">
                    <img className="modal-image_img" src={imgSrc} alt={`Image of the artwork ${artworkName}`} />
                </figure>

                <div className="modal-info">
                    <section className="modal-artist">
                        <h3 className="">{artworkName}</h3>
                        <h4>{artistName}</h4>
                    </section>

                    <section className="modal-description">
                        <p>{description}</p>
                    </section>

                    <section className="modal-buy">
                        <span className="modal-buy_text">Comprar </span>
                        <a className="contact-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            Contacta <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Modal;