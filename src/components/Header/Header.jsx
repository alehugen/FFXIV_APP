import React from 'react';
import '../Header/Header.css';
import fflogo from '../Header/ff_logo.png';
import meteor from '../Header/meteor.png';

function Header() {

  return (
    <div className='header-box'>
      <img src={ fflogo } alt='ff logo'/>
      <div className='text-box'>
      <h1>FOURTEEN DAILY</h1>
      <h4>Unofficial FFXIV Portal</h4>
      </div>
      <img src={ meteor } alt='meteor'/>
    </div>
  )
}

export default Header;