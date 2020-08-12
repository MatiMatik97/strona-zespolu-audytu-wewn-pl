import React from "react";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img src={logo} alt="header__logo" className="header__logo" />
        <div className="header_titles">
          <h1 className="header__title_large">Zespół audytu węwnętrznego</h1>
          <h2 className="header__title_medium">Politechnika Lubelska</h2>
        </div>
      </div>
      <hr className="header__line" />
    </div>
  );
};

export default Header;
