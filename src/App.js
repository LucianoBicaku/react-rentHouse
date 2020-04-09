import React from "react";
import "./App.css";

import AboutUs from "./pages/AboutUs";
import AllHomes from "./pages/AllHomes";
import FNFPage from "./pages/FNFPage";
import HomePage from "./pages/HomePage";
import Landlord from "./pages/Landlord";
import NormalUser from "./pages/NormalUser";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/user/:id">
            <NormalUser />
          </Route>
          <Route exact path="/home/:id">
            <Home />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/allhomes">
            <AllHomes />
          </Route>
          <Route exact path="/landlord">
            <Landlord />
          </Route>
          <Route>
            <FNFPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
