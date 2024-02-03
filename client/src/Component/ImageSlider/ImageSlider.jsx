import React, { useState, useEffect } from 'react'
import r1 from '../images/r1.jpg'
import r2 from '../images/r2.jpg'
import r3 from '../images/r3.jpg'
import r4 from '../images/r4.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const ImageSlider = () => {

  const slides = [
    {
      image: r1,
      title: 'Protect',
    },
    {
      image: r2,
      title: 'Driver',
    },
    {
      image: r3,
      title: 'Event',
    },
    {
      image: r4,
      title: 'Private',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextSlide = (() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  });

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 4000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex,nextSlide]);

  return (
    <div style={{maxWidth: '1400px', height: '580px', margin: 'auto', padding: '16px 4px', position: 'relative'}}>
      <div 
      style={{width: '100%', height: '100%', borderRadius: '25px', backgroundPosition: 'center', backgroundSize: 'cover', transitionDuration: '500ms', backgroundImage: `url(${slides[currentIndex].image})`}}></div>
    

    <div style={{position: 'absolute', top: '50%', left: '5px', fontSize: '2em', borderRadius: '50%', padding: '2px', color: 'white', cursor: 'pointer', transform: 'translateY(-50%)'}}>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />
  </div>
  
  <div style={{position: 'absolute', top: '50%', right: '5px', fontSize: '2em', borderRadius: '50%', padding: '2px', color: 'white', cursor: 'pointer', transform: 'translateY(-50%)'}}>
    <BsChevronCompactRight onClick={nextSlide} size={30} />
  </div>

  <div style={{display: 'flex', justifyContent: 'center', padding: '2px', position: 'absolute', top: '4px'}}>
    {slides.map((slide, slideIndex) => (
      <div
        style={{fontSize: '2em', cursor: 'pointer', color: slideIndex === currentIndex ? 'blue' : 'black'}}
        key={slideIndex}
        onClick={() => goToSlide(slideIndex)}
      >
        
      </div>
    ))}
  </div>
</div>
  );
};

export default ImageSlider;
