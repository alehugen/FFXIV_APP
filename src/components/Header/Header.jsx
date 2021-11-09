import React from 'react';
import fflogo from '.../images/ff_logo.png'
import '../Header/Header.css';

function Header() {

  return (
    <div className='header-box'>
      <img src={ fflogo } alt='ff logo'/>
    </div>
  )
}

export default Header;