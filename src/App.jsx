import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

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
          <h2>Main</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
