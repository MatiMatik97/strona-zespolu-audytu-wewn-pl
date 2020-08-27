import React from "react";
import "./UniversalPage.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const UniversalPage = ({ component }) => {
  return (
    <>
      <Header />
      <div className="body">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main">{component}</div>
      </div>
      <Footer />
    </>
  );
};

export default UniversalPage;
