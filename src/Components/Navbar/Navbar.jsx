import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css';
import ProgressBar from '../Progressbar/Progress';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='container' id='nav'>
      <img src={logo} alt="logoimage" className='logo' />
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {/* Menu toggle button logic for opening the nav overlay */}
      <div className={`nav-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <ul className='nav-items'>
          <li onClick={closeMenu}><Link to="/home">Home</Link></li>
          <li onClick={closeMenu}><Link to="/about">About</Link></li>
          <li onClick={closeMenu}><Link to="/member">Members</Link></li>
          <li onClick={closeMenu}><Link to="/gallery">Gallery</Link></li>
          <li onClick={closeMenu}>Achievements</li>
          <li onClick={closeMenu}>Sponsors</li>
          <li className='btn' id='navcontact' onClick={closeMenu}><Link to="/contact">Contact us</Link></li>
        </ul>
      </div>
      <ProgressBar />
      </nav>
      
      
  );
};

export default Navbar;
