import React, { useEffect, useState } from "react";
import "./rentpage.css";
import axios from "axios";
import IMG from "../homepage components/img/home3.jpg";
import IMG1 from "../homepage components/img/Path 261.svg";
export default function HomesComponent() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/homes")
      .then((res) => {
        const info = res.data;
        setHomes(info);
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
          {homes.map((home) => {
            return (
              <div className="homes-grid-item" key={home._id}>
                {home.premium ? (
                  <img className="premium-logo" src={IMG1} />
                ) : (
                  <></>
                )}
                <img className="homes-grid-img" src={IMG} alt="lol" />

                <p
                  className={
                    home.premium ? "home-item-infoP" : "home-item-info"
                  }
                ></p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
