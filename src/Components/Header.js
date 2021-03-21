import React from "react";
import Typed from "react-typed";
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
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default Header;
