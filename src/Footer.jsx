// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
      
        <pre>
        <ul>
          <li><Link to="/">Home </Link></li>
          <li><Link to="/about-us">About Us  </Link></li>
          <li><Link to="/donor">Donor </Link></li>
          <li><Link to="/recipients">Recipients </Link></li>
          <li><Link to="/blood-availability">Blood Availability </Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
        </pre>
      </nav>
      <p>Copyrights ©  2024, All Rights Reserved. Site Designed & Maintained By vignan.org</p>
    </footer>
  );
};

export default Footer;