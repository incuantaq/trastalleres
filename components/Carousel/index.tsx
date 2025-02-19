"use client"
import React, { useState, useEffect } from 'react';
import './Carousel.css';

interface ImageCarouselProps {
  images: string[];
}


const Carousel: React.FC<ImageCarouselProps> = ({ images }) => { 
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    if (images.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); 
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, images.length]);

  // Function to handle clicks on images to navigate.
  const handleImageClick = (index: number) => {
      setCurrentIndex(index)
  }

    // Handle the case where images array is empty or not yet loaded
  if (!images || images.length === 0) {
    return <div>Loading...</div>; // Or some other placeholder
  }
  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {images.map((image, index) => {
          // Calculate the difference between the current index and the image index.
          let diff = index - currentIndex;

          // Normalize the difference to be within -2 to 2.  This is key for positioning.
          if (diff > 2) {
              diff -= images.length;
          }
            
          if (diff < -2) {
              diff += images.length;
          }

          let positionClass = 'slide-hidden';
          if (diff === 0) {
            positionClass = 'slide-center';
          } else if (diff === 1) {
            positionClass = 'slide-right';
          } else if (diff === 2) {
            positionClass = 'slide-right-far';
          } else if (diff === -1) {
            positionClass = 'slide-left';
          } else if (diff === -2) {
            positionClass = 'slide-left-far';
          }
        
          return (
            <div
              key={index}
              className={`carousel-slide ${positionClass}`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}  // alt text should be descriptive
                onClick={()=>handleImageClick(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col-reverse px-6 md:flex-col absolute pb-4 inset-x-0 bottom-0 my-0 mx-auto">
            <p className="text-xl/2 md:text-xl/8 text-gray-700 text-center">En Trastalleres, nuestra pasión por el arte da vida a obras únicas y diferentes.</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-bold tracking-tight text-pretty text-gray-900 text-center text-[#75103A]">Obras por encargo, Arte por inversión y diversión.</h2>
        </div>
    </div>
  );
}

export default Carousel;