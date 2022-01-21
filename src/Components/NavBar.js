import React, { useState } from 'react';
import './Styles/NavBar.scss';

const NavBar = ({ hide }) => {
  // const [hide, setHide] = useState(false);

  // if (currentData.location !== undefined) {
  //   setTimeout(() => {
  //     setHide(true);
  //   }, 1000);
  // }
    
  let clickHandler = () => {
    console.log("btn clicked");
  }

  return (
    <nav>
      <h2 className={`app-name ${hide ? "animate" : ""}`}>Weather</h2>
      <button className={`menu-btn ${hide ? "animate" : ""}`} onClick={clickHandler}>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default NavBar;