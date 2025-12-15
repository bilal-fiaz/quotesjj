import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">BILAL</div>
      <div className="list-container">
      <ul className="nav-links">
        {/* <li><a href="#">Home</a></li> */}
        <li><a href="#">Quotes</a></li>
        {/* <li><a href="#">Authors</a></li> */}
        
      </ul>
      </div>

      {/* <button className="nav-btn">Connect</button> */}
    </nav>
  );
}

export default Navbar;
