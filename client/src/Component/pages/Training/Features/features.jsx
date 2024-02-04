import React from 'react';
import './features.css';
import f1 from '../images/f1.png'
import f2 from '../images/f2.png'
import f3 from '../images/f3.png'
import f4 from '../images/f4.png'


const features = () => {
  return (
    <section className='f-wrapper'>
      <div className='f-container'>
        <img src={f1} alt=' ' />
        <img src={f2} alt=' ' />
        <img src={f3} alt=' ' />
        <img src={f4} alt=' ' />
      </div>
    </section>
  );
};

export default features