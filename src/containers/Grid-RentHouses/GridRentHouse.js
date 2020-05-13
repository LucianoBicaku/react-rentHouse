import React, { useState, useContext } from "react";
import "./GridRentHouse.css";
import IMG from "../../img/Path 315.svg";
import IMG1 from "../../img/Path 261.svg";
import LoadingCard from "./LoadingCard";
import { SearchContext } from "../GlobalState/SearchContext";

export default function HomesComponent() {
  const [searchData, setSearchData] = useContext(SearchContext);
  const [loading, setLoading] = useState(true);

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
          {searchData == null ? (
            <LoadingCard />
          ) : (
            searchData.map((home) => {
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
      </div>
    </div>
  );
}
