import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';


const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        footer.classList.add('footer-visible');
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check in case already in view
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer-modern" ref={footerRef}>
      <div className="footer-modern-container">
        <div className="footer-modern-section about">
          <h3>Muhammad Murtaza</h3>
          <p>
            I’m a versatile web developer specializing in WordPress, front-end
            development, and Shopify. My goal is to deliver beautiful and functional websites across all devices.
          </p>
        </div>
        <div className="footer-modern-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
        <div className="footer-modern-section contact">
          <h3>Contact Info</h3>
          <p><i className="bx bx-envelope"></i><a href="mailto:murtazawebcreations@email.com">  murtazawebcreations@gmail.com</a></p>
          <p><i className="bx bx-phone"></i><a href="tel:+923164667703"> +923164667703</a></p>
          <p><i className="bx bx-map"></i> <a href="https://maps.app.goo.gl/tadZ5UUSRAisps9FA" target="_blank" rel="noopener noreferrer">Lahore, Pakistan</a></p>
        </div>
        <div className="footer-modern-section social">
          <h3>Follow Me</h3>
          <div className="footer-modern-social-media">
            <a href="https://www.facebook.com/murtaza.webcreations"  target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bx bxl-facebook"></i></a>
            <a href="https://www.instagram.com/murtazawebcreations/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bx bxl-instagram"></i></a>
            <a href="https://www.behance.net/M_Murtaza" target="_blank" rel="noopener noreferrer" aria-label="behance"><i className="bx bxl-behance"></i></a>
            <a href="https://www.linkedin.com/in/murtazawebcreations/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-modern-bottom">
        <p>Copyright © 2026 Muhammad Murtaza. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;