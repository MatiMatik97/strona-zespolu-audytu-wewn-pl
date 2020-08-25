import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { pagesLinks } from "../../utils/links";

const Navbar = () => {
  const { HOME_PAGE, TEST_PAGE } = pagesLinks;

  return (
    <div className="navbar">
      <h1 className="navbar__title">Menu</h1>
      <hr className="navbar__line" />

      <div className="navbar__list">
        <Link className="navbar__listItem" to={HOME_PAGE.link}>
          {HOME_PAGE.title}
        </Link>
        <Link className="navbar__listItem" to={TEST_PAGE.link}>
          {TEST_PAGE.title}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
