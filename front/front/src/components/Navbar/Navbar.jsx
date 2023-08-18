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

      <div className='app__navbar-button'>
       <a href="https://sgyjchvaboe.typeform.com/to/hoi6aWWZ">Next</a>
       <img src={images.fusay} alt='button' />
      </div>
  </div>

  )
}

export default Navbar;