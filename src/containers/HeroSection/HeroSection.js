import React, { useState } from "react";
import TwoPointSlider from "./TwoPointSlider";
import "./HeroSection.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

export default function HeroSection() {
  const [price, setPrice] = useState({
    min: null,
    max: 2000000,
  });
  return (
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
              <input
                type="text"
                name="price"
                placeholder="Min"
                value={price.min}
                onChange={(event) => {
                  const newValue = {
                    min: event.target.value,
                    max: price.max,
                  };
                  setPrice(newValue);
                  // console.log(price.min);
                }}
              />
              <hr />
              <input
                type="text"
                name="price"
                placeholder="Max"
                value={price.max}
                onChange={(event) => {
                  const newValue = { min: price.min, max: event.target.value };
                  setPrice(newValue);
                  // console.log(price.max);
                }}
              />
            </div>
            <br />
            <form>
              <InputRange
                step={100}
                maxValue={2000000}
                minValue={0}
                formatLabel={(value) => `${value} All`}
                value={price}
                onChange={(value) => setPrice(value)}
                onChangeComplete={(value) => {
                  console.log(value);
                }}
              />
            </form>
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
        <button onClick={() => console.log(price)}>Search</button>
      </div>
    </div>
  );
}
