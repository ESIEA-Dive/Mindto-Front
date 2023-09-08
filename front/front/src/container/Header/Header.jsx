import React from 'react'

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
<div className='app__header'>
  <div className='app__header-box'>
  <div class='background-image'>
    <img src={images.social} />
  </div>
    <div className='app__box-header'>
      <a>Social</a>
    </div>

    <div className='app__box-title'>
      <h1>More than cold feet</h1>
      <a>Tips on overcoming social anxiety</a>
    </div>

    <div className='app__box-author'>
      <img src={images.louise}></img>
      <a>Louise Kwong</a>
      <img className='left' src={images.tb}></img>
      <a>Timothy O'Brien</a>
    </div>
    {/* <div className='app__header-pillar'>
      <img src={images.physical} alt='pillar' />
    </div> -> A REVOIR POUR LE CSS */} 
  </div>

  <div className='app__header-text'>
    <a>“ Most people don't chase their dreams because they are scared of what their
mates will say. ” - Jay Shetty</a>
    
  </div>
</div>
  )
}

export default Header;