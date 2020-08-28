import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { pagesLinks } from "./utils/links";
import HomePage from "./pages/HomePage/HomePage";
import CompositionPage from "./pages/CompositionPage/CompositionPage";
import FunctionsPage from "./pages/FunctionsPage/FunctionsPage";
import DownloadPage from "./pages/DownloadPage/DownloadPage";

const App = () => {
  const {
    HOME_PAGE,
    COMPOSITION_PAGE,
    FUNCTIONS_PAGE,
    DOWNLOAD_PAGE,
  } = pagesLinks;

  return (
    <div className="app">
      <Router>
        <Switch>
          {/* DOWNLOAD PAGE */}
          <Route path={DOWNLOAD_PAGE.link}>
            <DownloadPage />
          </Route>

          {/* FUNCTIONS PAGE */}
          <Route path={FUNCTIONS_PAGE.link}>
            <FunctionsPage />
          </Route>

          {/* COMPOSITION PAGE */}
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
