import React from 'react';
import './Banner.css';
import b1 from '../images/b1.png';
import b2 from '../images/b2.png';
import b3 from '../images/b3.png';
import b4 from '../images/b4.png';
import b5 from '../images/b5.png';
import b6 from '../images/b6.png';
import b7 from '../images/b7.png';
import b8 from '../images/b8.png';

const Banner = () => {
  return (
    <div className="statistics-banner">
      <div className='text'>
        <h1>Company Statistics and Logos</h1>
      </div>
      <div className="statistics">
        <div><i class="fas fa-calendar-alt"></i><span>25+</span><br></br> Experience</div>
        <div><i class="fa-solid fa-industry"></i><span>27+</span> Industries Served</div>
        <div><i class="fas fa-users"></i><span>3000+</span> Clients</div>
        <div><i class="fa-solid fa-city"></i><span>170+</span> Cities</div>
      </div>
      <div className="logos">
        <div className='logo-1'><img src={b1} alt="KAY Jewelers" className='box'/>
        <img src={b2} alt="Toys“R”Us" className='box-1'/>
        <img src={b3} alt="POLO RALPH LAUREN" className='box' />
        <img src={b4} alt="PetSmart" className='box-1'/>
        <img src={b5} alt="GameStop" className='box' />
        </div>
        <div className='logo-2'><img src={b6} alt="WORLD OF HYATT" className='box-1'/>
        <img src={b7} alt="THREDUP" className='box'/>
        <img src={b8} alt="FOREVER21" className='box-1'/>
        </div>
      </div>
    </div> 
  );
};

export default Banner;
