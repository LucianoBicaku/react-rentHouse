import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import { SearchContext } from "../GlobalState/SearchContext";
import { Redirect } from "react-router";

export default function HeroSection() {
  const [searchData, setSearchData] = useContext(SearchContext);
  const [price, setPrice] = useState({
    min: null,
    max: null,
  });
  const [rederict, setRederict] = useState(false);
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState(null);

  const search = (min, max, l, r) => {
    if (min == null) min = 0;
    if (max == null) max = 2000000;
    if (l === "") l = "Tirane";
    if (isNaN(r)) r = 0;
    axios
      .get("https://rent-project.herokuapp.com/searchHomes", {
        params: {
          cmimiMax: max,
          cmimiMin: min,
          qytet: l,
          rooms: r,
        },
      })
      .then((response) => {
        setSearchData(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
    setRederict(true);
  };

  return rederict ? (
    <Redirect push to="/rent" />
  ) : (
    <div className="hero">
      <div className="hero-content item1">
        <h1>Searching for a house?</h1>
        <p>Give us the clues and get a house to choose!</p>
      </div>
      <div className="item2">
        <div className="location">
          <label htmlFor="location">Location</label>
          <div className="location-content">
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(event) => {
                setLocation(event.target.value);
              }}
            />
            <Link to={"/map"}>
              <button className={"nearme"}>
                <i className="fas fa-street-view" />
              </button>
            </Link>
          </div>
        </div>

        <div className="price">
          <label htmlFor="price">Price Range</label>
          <div className="price-content">
            <div className="price-input">
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
                }}
              />
            </div>

            <InputRange
              step={100}
              maxValue={2000000}
              minValue={0}
              formatLabel={(value) => `${value} All`}
              value={price}
              onChange={(value) => setPrice(value)}
            />
          </div>
        </div>

        <div className="R-input">
          <label>
            Rooms
            <br />
            <select
              value={rooms}
              onChange={(event) => {
                setRooms(event.target.value);
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={0}>More</option>
            </select>
          </label>
          <label>
            Roomates
            <br />
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={0}>More</option>
            </select>
          </label>
        </div>

        <div className="search-btn-container">
          <button
            className="item2-search-button"
            onClick={() => {
              search(price.min, price.max, location, parseInt(rooms, 10));
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
