import React from "react";

const FooterDisplay = () => {
  return (
    <div className="footer">
      <hr className="footer__line" />
      <div className="footer__container">
        <div className="footer__content">
          <h2 className="footer__text">Stopka</h2>
          <h3 className="footer__timer" id="footer__timer">
            Timer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FooterDisplay;
