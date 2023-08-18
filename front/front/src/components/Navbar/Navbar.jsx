import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div>
      <nav className='app__navbar'>
        <div className='app__navbar-logo'>
          <img src={images.logo} alt='logo' />
        </div>
        <div className='app__navbar-title'>
          <a>Article</a>
          <div />
        </div>
        <div className='app__navbar-beta'>
          <a>Beta version</a>
        </div>
      </nav>

      <a href="https://sgyjchvaboe.typeform.com/to/hoi6aWWZ" className="bottom-button">Next
      <img></img>
      </a>
  </div>

  )
}

export default Navbar;