import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { pagesLinks } from "../../utils/links";

const Navbar = () => {
  const { HOME_PAGE, COMPOSITION_PAGE, FUNCTIONS_PAGE } = pagesLinks;

  return (
    <div className="navbar">
      <h1 className="navbar__title">Menu</h1>
      <hr className="navbar__line" />

      <div className="navbar__list">
        <Link className="navbar__listItem" to={HOME_PAGE.link}>
          {HOME_PAGE.text}
        </Link>
        <Link className="navbar__listItem" to={COMPOSITION_PAGE.link}>
          {COMPOSITION_PAGE.text}
        </Link>
        <Link className="navbar__listItem" to={FUNCTIONS_PAGE.link}>
          {FUNCTIONS_PAGE.text}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
