import React from 'react';
import './Companies.css';
import c1 from '../images/c1.png'
import c2 from '../images/c2.png'
import c3 from '../images/c3.png'
import c4 from '../images/c4.png'
import c5 from '../images/c5.png'
import c6 from '../images/c6.png'

const Companies = () => {
  return (
    <section className='c-wrapper'>
      <div className='c-container'>
        <img src={c1} alt=' ' />
        <img src={c2} alt=' ' />
        <img src={c3} alt=' ' />
        <img src={c4} alt=' ' />
        <img src={c5} alt=' ' />
        <img src={c6} alt=' ' />
      </div>
    </section>
  );
};

export default Companies