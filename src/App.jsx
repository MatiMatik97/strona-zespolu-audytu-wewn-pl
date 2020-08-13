import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="body">
        <Navbar />
        <div
          className="main"
          style={{
            // backgroundColor: "lightgray",
            width: "80vw",
            textAlign: "center",
            margin: "0px 10px",
            padding: "15px",
          }}
        >
          <h2>Strona Zespołu Audytu Wewnętrznego PL</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
