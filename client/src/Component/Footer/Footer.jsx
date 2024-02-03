import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaYoutube,FaInstagram, FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="company-info">
        <h2>BOUNCER</h2>
        <p>SECURITY GUARD</p>
        <p>Arcu enim massa scelerisque cras est venenatis taciti sociosqu a...</p>
        <div className="social-icons">
          <FaFacebook />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>

      <div className="quick-links">
        <h3>QUICK LINKS</h3>
        <ul>
          {['Home', 'About Us', 'Privacy Policy', 'Careers', 'Case Study'].map(link => (
            <li key={link}>{link}</li>
          ))}
        </ul>
      </div>

      <div className="our-services">
        <h3>OUR SERVICES</h3>
        {['Personal Protection', 'Commercial Security', 'Security Consulting', 
           'Objects Protected','Surveillance Cameras'].map(service => (
            <p key={service}>{service}</p>
          ))}
      </div>

      <div className="contact-us">
        <h3>CONTACT US</h3>
        <p><FaMapMarker  className='icon'/> Jakarta - Indonesia</p>
        <p><FaPhone className='icon'/> +62 812 3456 7890</p>
        <p><FaEnvelope className='icon'/> info@bouncer.com</p>
      </div>
    </div>
  );
};

export default Footer;
