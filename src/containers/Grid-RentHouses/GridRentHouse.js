import React, { useEffect, useState } from "react";
import "./GridRentHouse.css";
import axios from "axios";
import IMG from "../../img/Path 315.svg";
import IMG1 from "../../img/Path 261.svg";
import LoadingCard from "./LoadingCard";
export default function HomesComponent() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://rent-project.herokuapp.com/homes/")
      .then((res) => {
        const info = res.data;
        setHomes(info);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
          {loading ? (
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

                  <p
                    className={
                      home.premium
                        ? "home-item-info home-sub-Prem"
                        : "home-item-info home-sub-Norm"
                    }
                  >
                    {" "}
                    <p>
                      <img src={IMG} alt="" />
                      Rruga: {home.adress.rruga}
                    </p>
                    {home.description}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
