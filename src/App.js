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
import { SearchProvider } from "./containers/GlobalState/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>

            <Route exact path="/houses" component={Houses}></Route>

            <Route exact path="/houses/:id" component={HousePage}></Route>

            <Route exact path="/rent" component={RentPage}></Route>

            <Route exact path="/landlord" component={Landlord}></Route>

            <Route exact path="/user/:id" component={NormalUser}></Route>

            <Route exact path="/salepage" component={SalePage}></Route>

            <Route exact path="/premium" component={PremiumHouses}></Route>

            <Route exact path="/map" component={MapComponent}></Route>

            <Route exact path="/about" component={AboutUs}></Route>

            <Route exact path="/test" component={TestPage}></Route>
            <Route>
              <FNFPage />
            </Route>
          </Switch>
        </Router>
      </SearchProvider>
    </>
  );
}

export default App;
