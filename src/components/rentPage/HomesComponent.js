import React, { useEffect, useState } from "react";
import "./rentpage.css";
import axios from "axios";
import IMG1 from "../homepage components/img/Path 261.svg";
import "../homepage components/homepage.css";
import CFNF4 from "../CPNF4";
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
            <CFNF4 />
          ) : (
            homes.map((home) => {
              return (
                <div className="homes-grid-item" key={home._id}>
                  {home.premium ? (
                    <img className="premium-logo" src={IMG1} />
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
