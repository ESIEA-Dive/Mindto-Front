import React from 'react'

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
<div className='app__header'>
  <div className='app__header-box'>
    <div className='app__box-header'>
      <a>Mental</a>
    </div>

    <div className='app__box-title'>
      <h1>Leadership</h1>
      <a>A better leader leads to a better future</a>
    </div>

    <div className='app__box-author'>
      <img src={images.louise}></img>
      <a>Louise Kwong</a>
    </div>
    {/* <div className='app__header-pillar'>
      <img src={images.physical} alt='pillar' />
    </div> -> A REVOIR POUR LE CSS */} 
  </div>

  <div className='app__header-text'>
    <a>“A leader takes people where they want to go, a great leader takes people where they don't necessarily want to go but ought to be”</a>
    <p>Rosalynn Carter, former First Lady of the United States</p>
  </div>
</div>
  )
}

export default Header;