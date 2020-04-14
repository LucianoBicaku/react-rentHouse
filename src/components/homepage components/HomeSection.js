import React from "react";
import Header from "./Header";

import "./homepage.css";
export default function HomeSection() {
  return (
    <div className="home-section">
      <div className="color"></div>
      <Header />
      <div className="hero">
        <div className="hero-content item1">
          <h1>Searching for a house?</h1>
          <p>Give us the clues and get a house to choose!</p>
        </div>
        <div className="item2">
          <form>
            <input type="text" />
            <a href="#" id="search">
              <i className="fa fa-search"></i>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
