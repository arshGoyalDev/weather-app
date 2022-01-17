import React from 'react';
import './Styles/NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <h2 className='app-name'>Weather</h2>
      <div className='menu-btn'>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;