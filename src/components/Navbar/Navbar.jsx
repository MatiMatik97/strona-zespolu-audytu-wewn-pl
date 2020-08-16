import React from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Menu</h1>
      <hr className="navbar__line" />
      <ul className="navbar__list">
        <NavbarItem text={"Pierwszy link"} />
        <NavbarItem text={"Drugi link"} />
        <NavbarItem text={"Trzeci link"} />
      </ul>
    </div>
  );
};

export default Navbar;
