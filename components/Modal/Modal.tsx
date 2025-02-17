import React, { useEffect } from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    imgSrc: string;
    artworkName: string;
    artistName: string;
    description: string;
}

const Modal: React.FC<ModalProps> = (ModalProps : ModalProps) => {
    const { isOpen, onClose, imgSrc, artworkName, artistName, description } = ModalProps;
    
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

    const whatsappUrl = `https://wa.me/573102104501?text=Hello.%0AI want to ask about.%0AArtwork:%20${artworkName}%0AArtist:%20${artistName}`;

    if (!isOpen) return null;

    return (
        <div className="modal" onClick={handleBackgroundClick} role="dialog" aria-modal="true">
            <div className="modal-content">
                <figure className="modal-image">
                    <img className="modal-image_img" src={imgSrc} alt={`Image of the artwork ${artworkName}`} />
                </figure>

                <div className="modal-info">
                    <section className="modal-artist">
                        <h2>{artworkName}</h2>
                        <h3>{artistName}</h3>
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