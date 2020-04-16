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
            <label className="location">
              <i>Location</i>
              <br />
              <input type="text" name="name" placeholder="Location" />
            </label>
            <label className="price">
              <i>Price Range</i>
              <br />
              <div>
                <input type="text" name="price" placeholder="0" />
                <hr />
                <input type="text" name="price" placeholder="" />
              </div>

              <br />
              <input type="range" />
            </label>
            <div className="R-input">
              <label>
                Rooms
                <br />
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="more">More</option>
                </select>
              </label>
              <label>
                Roomates
                <br />
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="more">More</option>
                </select>
              </label>
            </div>
          </form>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}
