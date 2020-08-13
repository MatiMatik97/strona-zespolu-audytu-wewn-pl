import React, { useEffect } from "react";
import "./Footer.css";
import FooterDisplay from "./FooterDisplay";

const Footer = () => {
  const getFormattedDate = () => {
    return new Date().toLocaleString("pl-PL", {
      dateStyle: "full", // long - without day name
      timeStyle: "medium",
    });
  };

  const displayTimer = () => {
    document.getElementById("footer__timer").innerHTML = getFormattedDate();
  };

  useEffect(() => {
    setInterval(displayTimer, 1000);
    displayTimer();

    // eslint-disable-next-line
  }, []);

  return <FooterDisplay />;
};

export default Footer;
