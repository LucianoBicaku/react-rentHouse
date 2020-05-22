import React, { useState, useContext, useEffect } from "react";
import "./GridRentHouse.css";
import "./SearchComponent.css";
import axios from "axios";
import IMG from "../../img/Path 315.svg";
import IMG1 from "../../img/Path 261.svg";
import LoadingCard from "./LoadingCard";
import { Link } from "react-router-dom";
import { SearchContext } from "../GlobalState/SearchContext";

export default function HomesComponent() {
  const { data, loading, file, pagenr } = useContext(SearchContext);
  const [homes, setHomes] = data;
  const [load, setLoad] = loading;
  const [error, setError] = file;
  const [page, setPage] = pagenr;
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState(0);
  const [Roomates, setRoomates] = useState(0);
  const [price, setPrice] = useState({
    min: 0,
    max: 2000000,
  });
  const [showPrice, setShowPrice] = useState(false);
  const search = (min, max, l, r, nrRooms, page) => {
    if (min == null) min = 0;
    if (max == null) max = 2000000;
    axios
      .get(`https://rent-project.herokuapp.com/searchHomes/${page}`, {
        params: {
          cmimiMax: max,
          cmimiMin: min,
          rruga: l,
          nrdhoma: r,
          nrpersona: nrRooms,
        },
      })
      .then((response) => {
        setHomes(response.data);
        console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  };
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
    <>
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
          <button
            onClick={() => {
              search(price.min, price.max, location, rooms, page);
              setPage(1);
            }}
          >
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
                    setPage(1);
                    search(
                      event.target.value,
                      price.max,
                      location,
                      rooms,
                      Roomates,
                      page
                    );
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
                    setPage(1);
                    search(
                      price.min,
                      parseInt(event.target.value, 10),
                      location,
                      rooms,
                      Roomates,
                      page
                    );
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
                search(
                  price.min,
                  price.max,
                  location,
                  event.target.value,
                  Roomates,
                  page
                );
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>More</option>
            </select>
          </form>
        </div>
        <form className="serch-form">
          <label htmlFor="Roomates"> Roomates </label>
          <br />
          <select
            onChange={(event) => {
              setRoomates(event.target.value);
              search(
                price.min,
                price.max,
                location,
                rooms,
                event.target.value,
                page
              );
            }}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>More</option>
          </select>
        </form>
      </div>
      <div className="homes-component">
        <div className="homes-component-content">
          <form action="" className="homes-component-select">
            <label htmlFor="sort">Sort By: </label>
            <select name="sort" id="sort">
              <option value="Price">Price</option>
            </select>
          </form>

          <div className="homes-grid">
            {error ? (
              <div>
                <h1>File not found</h1>
              </div>
            ) : load ? (
              <LoadingCard />
            ) : (
              homes.map((home) => {
                return (
                  <Link to={`/houses/:${home._id}`} key={home._id}>
                    <div className="homes-grid-item" key={home._id}>
                      {home.premium ? (
                        <img className="premium-logo" src={IMG1} alt="" />
                      ) : (
                        <></>
                      )}
                      <img
                        className="homes-grid-img"
                        src={home.img}
                        alt="lol"
                      />

                      <div
                        className={
                          home.premium
                            ? "home-item-info home-sub-Prem"
                            : "home-item-info home-sub-Norm"
                        }
                      >
                        <p>
                          <img src={IMG} alt="" />
                          Rruga: {home.adress.rruga}
                        </p>
                        {home.description}
                      </div>
                    </div>
                  </Link>
                );
              })
            )}
          </div>

          <div className="page-number">
            <button
              onClick={() => {
                setPage(1);
                search(price.min, price.max, location, rooms, Roomates, 1);
              }}
            >
              First
            </button>
            <button
              onClick={() => {
                if (page == 1) {
                  setPage(1);
                  search(price.min, price.max, location, rooms, Roomates, 1);
                } else {
                  setPage(page - 1);
                  search(
                    price.min,
                    price.max,
                    location,
                    rooms,
                    Roomates,
                    page - 1
                  );
                }
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="active">{page}</button>
            <button
              onClick={() => {
                search(
                  price.min,
                  price.max,
                  location,
                  rooms,
                  Roomates,
                  page + 1
                );
                setPage(page + 1);
              }}
            >
              {page + 1}
            </button>
            <button
              onClick={() => {
                setPage(page + 2);
                search(
                  price.min,
                  price.max,
                  location,
                  rooms,
                  Roomates,
                  page + 2
                );
              }}
            >
              {page + 2}
            </button>
            <button
              onClick={() => {
                setPage(page + 1);
                search(
                  price.min,
                  price.max,
                  location,
                  rooms,
                  Roomates,
                  page + 1
                );
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
            <button>Last</button>
          </div>
        </div>
      </div>
    </>
  );
}
