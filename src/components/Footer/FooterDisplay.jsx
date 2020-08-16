import React from "react";

const FooterDisplay = () => {
  return (
    <div className="footer">
      <hr className="footer__line" />
      <div className="footer__container">
        <h2 className="footer__text">
          Politechnika Lubelska
          <br />
          ul. Nadbystrzycka 38 D 20 – 618 Lublin
        </h2>
        <h3 className="footer__timer" id="footer__timer">
          00:00:00
        </h3>
      </div>
    </div>
  );
};

export default FooterDisplay;
