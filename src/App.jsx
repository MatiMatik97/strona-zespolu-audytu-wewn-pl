import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pagesLinks } from "./utils/links";
import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const { HOME_PAGE, TEST_PAGE } = pagesLinks;

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* TEST PAGE */}
          <Route path={TEST_PAGE.link}>
            <h1>Inna stronka</h1>
          </Route>

          {/* HOME PAGE */}
          <Route path={HOME_PAGE.link}>
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
