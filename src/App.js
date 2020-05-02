import React from "react";
import "./App.css";

import AboutUs from "./pages/AboutUs";
import RentPage from "./pages/RentPage";
import FNFPage from "./pages/FNFPage";
import HomePage from "./pages/HomePage";
import Landlord from "./pages/Landlord";
import NormalUser from "./pages/NormalUser";
import SalePage from "./pages/SalePage";
import Houses from "./pages/Houses";
import HousePage from "./pages/HousePage";
import PremiumHouses from "./pages/PremiumHouses";
import TestPage from "./pages/TestPage";
import MapComponent from "./containers/Map/MapComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/houses">
            <Houses />
          </Route>

          <Route exact path="/houses/:id">
            <HousePage />
          </Route>

          <Route exact path="/rent">
            <RentPage />
          </Route>

          <Route exact path="/landlord">
            <Landlord />
          </Route>

          <Route exact path="/user/:id">
            <NormalUser />
          </Route>

          <Route exact path="/salepage">
            <SalePage />
          </Route>

          <Route exact path="/premium">
            <PremiumHouses />
          </Route>

          <Route exact path="/map">
            <MapComponent />
          </Route>

          <Route exact path="/about">
            <AboutUs />
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
