import React from 'react';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' href="/"/>
      </div>
      <div className='app__navbar-title'>
        <a>Article</a>
        <div />
      </div>
      <div className='app__navbar-beta'>
        <a>Beta Version</a>
      </div>
    </nav>
  )
}

export default Navbar;