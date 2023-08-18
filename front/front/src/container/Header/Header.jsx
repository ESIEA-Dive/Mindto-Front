import React from 'react'

import { images } from '../../constants';
import './Header.scss';

const Header = () => {
  return (
<div className='app__header'>
  <div className='app__header-box'>
    <div className='app__box-header'>
      <a>Physical</a>
    </div>

    <div className='app__box-title'>
      <h1>Maladaptive Sleep Behaviors</h1>
      <a>Identifying Them For a Better You</a>
    </div>

    <div className='app__box-author'>
      <img src={images.brittany}></img>
      <a>Brittany Collens</a>
    </div>
    {/* <div className='app__header-pillar'>
      <img src={images.physical} alt='pillar' />
    </div> -> A REVOIR POUR LE CSS */} 
  </div>

  <div className='app__header-text'>
    <a>Most days, I look for a caffeine boost in the morning and again in the afternoon. I’ve also caught myself nodding off in the middle of the day or wanting to take a nap from time to time.</a>
  </div>
</div>
  )
}

export default Header;