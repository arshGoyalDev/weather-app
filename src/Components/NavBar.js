import React, { useState } from "react";
import "./Styles/NavBar.scss";

const NavBar = ({ hide }) => {
  // navigation bar click handler
  let clickHandler = () => {
    console.log("btn clicked");
  };

  return (
    <nav>
      <h2 className={`app-name ${hide ? "animate" : ""}`}>weather.today</h2>
      <button
        className={`menu-btn ${hide ? "animate" : ""}`}
        onClick={clickHandler}
      >
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default NavBar;
