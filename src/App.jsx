import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pagesLinks } from "./utils/links";
import HomePage from "./pages/HomePage/HomePage";
import CompositionPage from "./pages/CompositionPage/CompositionPage";

const App = () => {
  const { HOME_PAGE, COMPOSITION_PAGE } = pagesLinks;

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* TEST PAGE */}
          <Route path={COMPOSITION_PAGE.link}>
            <CompositionPage />
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
