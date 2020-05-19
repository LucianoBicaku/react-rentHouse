import React, { useState, useContext } from "react";
import "./GridRentHouse.css";
import IMG from "../../img/Path 315.svg";
import IMG1 from "../../img/Path 261.svg";
import LoadingCard from "./LoadingCard";
import { SearchContext } from "../GlobalState/SearchContext";

export default function HomesComponent() {
  const { data, loading, file } = useContext(SearchContext);
  const [homes, setHomes] = data;
  const [load, setLoad] = loading;
  const [error, setError] = file;
  const [page, setPage] = useState(1);

  return (
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
                <div className="homes-grid-item" key={home._id}>
                  {home.premium ? (
                    <img className="premium-logo" src={IMG1} alt="" />
                  ) : (
                    <></>
                  )}
                  <img className="homes-grid-img" src={home.img} alt="lol" />

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
              );
            })
          )}
        </div>

        <div className="page-number">
          <button onClick={() => setPage(1)}>First</button>
          <button
            onClick={() => {
              if (page == 1) setPage(1);
              else setPage(page - 1);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="active">{page}</button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            {page + 1}
          </button>
          <button onClick={() => setPage(page + 2)}>{page + 2}</button>
          <button onClick={() => setPage(page + 1)}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button>Last</button>
        </div>
      </div>
    </div>
  );
}
