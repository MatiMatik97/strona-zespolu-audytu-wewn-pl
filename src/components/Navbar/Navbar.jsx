import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Menu</h1>
      <hr className="navbar__line" />
      <ul className="navbar__list">
        <li className="navbar__list-item">Pierwszy link</li>
        <hr className="navbar__list-line" />
        <li className="navbar__list-item">Drugi link</li>
        <hr className="navbar__list-line" />
        <li className="navbar__list-item">Trzeci link</li>
      </ul>
    </div>
  );
};

export default Navbar;
