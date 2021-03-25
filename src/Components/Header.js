import React from "react";
import Typed from "react-typed";
import About from "./about";
function Header() {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Web Developer Portfolio</h1>
        <Typed
          className="typed-text"
          strings={["Welcome to my Portfolio", "Web Developer Portfolio"]}
          typespeed={5000}
          backspeed={5000}
          loop
        />

        <h2 className="btn-main-offer">
          Personal Email : <br /> charbeleid959@gmail.com
        </h2>
      </div>
    </div>
  );
}

export default Header;
