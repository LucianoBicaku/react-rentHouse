import React, { useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import { SearchContext } from "../GlobalState/SearchContext";
import { Redirect } from "react-router";

export default function HeroSection() {
  const { data, pagenr, price } = useContext(SearchContext);
  const [homes, setHomes] = data;
  const [page, setPage] = pagenr;
  const [prices, setPrices] = price;
  const [rederict, setRederict] = useState(false);
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState(0);
  const [Roomates, setRoomates] = useState(0);

  const search = (min, max, l, r, nrRooms) => {
    if (min == null) min = 0;
    if (max == null) max = 2000000;
    if (isNaN(r)) r = 0;
    if (isNaN(nrRooms)) nrRooms = 0;
    axios
      .get(`https://europe-west2-rent-app-83030.cloudfunctions.net/api/searchHomes/${1}`, {
        params: {
          maxPrice: max,
          minPrice: min,
          street: l,
          rooms: r,
          tenants: nrRooms,
        },
      })
      .then((response) => {
        setHomes(response.data);
        console.log(response);
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
                <button className="fas fa-street-view nearme">
                  <i></i>
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
                  value={prices.min}
                  onChange={(event) => {
                    const newValue = {
                      min: event.target.value,
                      max: prices.max,
                    };
                    setPrices(newValue);
                  }}
                />
                <hr />
                <input
                  type="text"
                  name="price"
                  placeholder="Max"
                  value={prices.max}
                  onChange={(event) => {
                    const newValue = { min: price.min, max: event.target.value };
                    setPrices(newValue);
                  }}
                />
              </div>

              <InputRange
                step={100}
                maxValue={2000000}
                minValue={0}
                formatLabel={(value) => `${value} All`}
                value={prices}
                onChange={(value) => setPrices(value)}
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
                <option value={4}>More</option>
              </select>
            </label>
            <label>
              Roomates
            <br />
              <select
                value={Roomates}
                onChange={(event) => {
                  setRoomates(event.target.value);
                }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>More</option>
              </select>
            </label>
          </div>

          <div className="search-btn-container">
            <button
              className="item2-search-button"
              onClick={() => {
                search(prices.min, prices.max, location, parseInt(rooms, 10));
              }}
            >
              Search
          </button>
          </div>
        </div>
      </div>
    );
}
