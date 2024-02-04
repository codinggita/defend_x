import React, { useRef, useEffect } from 'react';
import './Slider.css';  // Make sure to import your CSS file
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';

const Slider = () => {
  const slideRef = useRef(null); 

  const imagesInfo = [
    { name: 'LUNDEV', description: 'Information about Image 1' },
    { name: 'LUNDEV', description: 'Information about Image 2' },
    { name: 'LUNDEV', description: 'Information about Image 3' },
  ];

  const handleNext = () => {
    const slideElement = slideRef.current;
    slideElement.appendChild(slideElement.firstElementChild);
  };

  const handlePrev = () => {
    const slideElement = slideRef.current;
    slideElement.prepend(slideElement.lastElementChild);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <slider>
      <div className="container">
        <div id="slide" ref={slideRef}>
          {[image1, image2, image3].map((image, index) => (
            <div key={index} className="item" style={{ backgroundImage: `url(${image})` }}>
              <div className="content">
                <div className="name">{imagesInfo[index].name}</div>
                <div className="des">{imagesInfo[index].description}</div>
                <button>See more</button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </slider>
  );
};

export default Slider;
