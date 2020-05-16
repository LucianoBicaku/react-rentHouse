import React, { useContext, useState } from "react";
import "./SearchComponent.css";
import axios from "axios";

import { SearchContext } from "../GlobalState/SearchContext";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";

export default function SearchComponent() {
  const { data } = useContext(SearchContext);
  const [homes, setHomes] = data;
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState(0);
  const [nrRooms, setNrRooms] = useState(0);
  const [price, setPrice] = useState({
    min: 0,
    max: 2000000,
  });

  //show inputs in search
  const [showPrice, setShowPrice] = useState(false);

  const search = (min, max, l, r) => {
    if (min === "") min = 0;
    if (max === "") max = 200000;
    if (l === "") l = "Tirane";
    axios
      .get("https://rent-project.herokuapp.com/searchHomes", {
        params: {
          cmimiMax: parseInt(max, 10),
          cmimiMin: parseInt(min, 10),
          qytet: l,
          rooms: r,
        },
      })
      .then((response) => {
        setHomes(response.data);
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });
  };

  function changePrice(min, max) {
    const newValue = {
      min: min,
      max: max,
    };
    setPrice(newValue);
  }

  function checkPriceInputs(value) {
    if (parseInt(value, 10).length === 0) {
      const newPrice = {
        min: 0,
        max: price.max,
      };
      return newPrice;
    } else {
      const newPrice = {
        min: parseInt(value, 10),
        max: price.max,
      };
      return newPrice;
    }
  }

  return (
    <div className="search-component">
      <div className="search-component-item">
        <form className="serch-form">
          <label htmlFor="location"> Location </label>
          <br />
          <input
            type="text"
            name="location"
            id="location"
            onChange={(event) => {
              setLocation(event.target.value);
            }}
          />
        </form>
        <button onClick={() => search(price.min, price.max, location, rooms)}>
          <i className="fas fa-search search-component-icon"></i>
        </button>
      </div>
      <div className="search-component-item">
        <form>
          <label htmlFor="Price" onClick={() => setShowPrice(!showPrice)}>
            Price
            {showPrice ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </label>

          {showPrice ? (
            <div className="serch-component-price-inputs">
              <input
                type="text"
                name="Price"
                id="Price"
                placeholder="Min"
                onChange={(event) => {
                  setPrice(checkPriceInputs(event.target.value));
                  search(event.target.value, price.max, location, rooms);
                }}
              />
              <input
                type="text"
                name="Price"
                id="Price"
                placeholder="Max"
                onChange={(event) => {
                  const newPrice = {
                    min: price.min,
                    max: parseInt(event.target.value, 10),
                  };
                  setPrice(newPrice);
                  search(price.min, event.target.value, 10, location, rooms);
                }}
              />
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
      <div className="search-component-item">
        <form className="serch-form">
          <label htmlFor="Rooms">Rooms</label>
          <br />
          <select
            onChange={(event) => {
              setRooms(event.target.value);
              search(price.min, price.max, location, event.target.value);
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={0}>More</option>
          </select>
        </form>
      </div>
      <form className="serch-form">
        <label> Roomates </label>
        <br />
        <select
          onChange={(event) => {
            setRooms(event.target.value);
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={0}>More</option>
        </select>
      </form>
    </div>
  );
}
