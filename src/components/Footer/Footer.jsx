import React from 'react';
import '../Footer/Footer.css';
import linkedin from '../Footer/linekdin_logo.png';

function Footer() {

  return (
    <div className='footer-box'>
      <h3>Developed by Alessandro Hugen</h3>
      <a href='https://www.linkedin.com/in/alehugen/' 
        target='_blank' 
        rel='noreferrer'>
          <img src={ linkedin } alt='linkedin logo' />
      </a>
    </div>
  )
}

export default Footer;