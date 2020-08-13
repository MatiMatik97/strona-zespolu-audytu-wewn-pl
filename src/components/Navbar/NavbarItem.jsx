import React from "react";

const NavbarItem = ({ text, withLineBelow }) => {
  return (
    <>
      <li className="navbar__list-item">{text}</li>
      {withLineBelow && <hr className="navbar__list-line" />}
    </>
  );
};

export default NavbarItem;
