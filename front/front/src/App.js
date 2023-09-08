import React from 'react';

import { Header, Article } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <GreenBanner /> 
      <Navbar /> 
      <Header />
      <Article />
    </div>
  );
}

export default App;