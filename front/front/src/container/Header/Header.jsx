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
      <h1>Intermittent Fasting 101</h1>
      <a>How It Works</a>
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
    <a>There's plenty of fad diets out there: keto, paleo, raw, Beverly Hills… the list goes on and on. But recently, one type of nutritional plan has been sweeping wellness world: Intermittent fastings</a>
  </div>
</div>
  )
}

export default Header;