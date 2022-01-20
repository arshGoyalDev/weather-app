import React from 'react';
import './Styles/NavBar.scss';

const NavBar = () => {

  let clickHandler = () => {
    console.log("btn clicked");
  }

  return (
    <nav>
      <h2 className='app-name'>Weather</h2>
      <button className='menu-btn' onClick={clickHandler}>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default NavBar;