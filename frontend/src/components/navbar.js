import React from 'react';
import { Link } from 'react-router-dom';
import logo from './novuslogo.png'
import './styles.css'; // Import the CSS file containing the styles

function Navbar() {
  return (
    <div className='main-content'>
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to='/'>
              <img src={logo} className='navbarlogo' alt='novuslogo'  style={{ float: 'left' }}/>
            </Link>
          </li>
          <li>
            <Link to="/markets">Markets</Link>
          </li>
          <li>
            <Link to="/progression">Progression</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
    </div>
  );
}

export default Navbar;
