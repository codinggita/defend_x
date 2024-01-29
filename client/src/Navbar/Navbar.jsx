import React, { useState } from 'react';
import logo from '../images/logo.svg';
import { Data } from './Data';
import './Navbar.css';

 const Navbar = () => { 
  const [state, setState] = useState(false); 
  const handleClick = () => {
    setState(!state);
  };
  return (
    <nav className="NavbarData">
      <img src={logo} className='app-logo' alt='logo' />
      {/*----bar-----*/}

       <div className="menuBar" onClick={handleClick}>
        <i className={state ? "fas fa-close" : "fas fa-bars"}></i>
       </div>

      {/* ul section-------------*/}

      <ul className={state ? "NavMenu active" : "NavMenu"}>
        {Data.map((item, index)=>{
          return(
          <li key={index}>
            <a href={item.url} className={item.className}>
              <i className={item.icon}></i>
              {item.title}
              </a>
            </li>
            );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;