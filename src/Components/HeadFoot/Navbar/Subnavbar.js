import React from 'react';
import './Subnavbar.css'; // Custom CSS for styling the logo
import logo from '../../../Assets/GIRIRAJ LOGO-01.png';
import { Link } from 'react-router-dom';

const Subnavbar = () => {
  return (
    <>
      <div id="header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarSupportedContent" 
              aria-controls="navbarSupportedContent" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className="navbar-content">
                <ul className="navbar-nav left-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                  </li>
                
                </ul>

                <div className="navbar-brand logo-container">
                  <Link to="/">
                    <img src={logo} className="logo" alt="Logo" />
                  </Link>
                </div>

                <ul className="navbar-nav right-menu">
                  <li className="nav-item">
                    <Link className="nav-link" to="/services">Services</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Subnavbar;
