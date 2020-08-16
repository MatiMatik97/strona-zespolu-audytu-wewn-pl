import React from "react";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="header__logo" className="header__logo" />
      <div className="header_titles">
        <h1 className="header__title-large">Zespół Audytu Wewnętrznego</h1>
        <h2 className="header__title-medium">Politechnika Lubelska</h2>
      </div>
    </div>
  );
};

export default Header;
