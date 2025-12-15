import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">BILAL</h2>
        <p className="footer-text">
          Illuminating minds, one thought at a time.
        </p>

        <div className="footer-links">
          {/* <a href="#">Home</a> */}
          <a href="#">Quotes</a>
          {/* <a href="#">Authors</a> */}
          {/* <a href="#">About</a> */}
        </div>

        <div className="footer-socials">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} NeuraQuotes — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
