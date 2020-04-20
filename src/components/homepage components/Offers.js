import React, { useState, useEffect } from "react";
import axios from "axios";
import Featured from "./img/Path 261.svg";
import "./homepage.css";

export default function Offers() {
  const [homes, setHomes] = useState([]);
  const [nhomes, setNhomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5500/premiumHomes")
      .then((res) => {
        const info = res.data.slice(0, 9);
        setHomes(info);
        console.log(info);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5500/normalHomes")
      .then((res) => {
        const info = res.data;
        setNhomes(info);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="best-offers">
        <h1>Check out our best offers!</h1>

        <div className="grid-container-3">
          {homes.map((home) => {
            return (
              <div className="grid-item-3" key={home._id}>
                <div className="card1">
                  <img src={home.img} alt="" />
                  <div className="card1-info">
                    <p>{home.description}</p>
                  </div>
                  <div className="premium">
                    <img src={Featured} alt="" />
                  </div>
                  <p className="cmimi">{home.cmimi} ALL</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid-container-4">
          {nhomes.map((home) => {
            return (
              <div className="grid-item-4" key={home._id}>
                <div className="card-s">
                  <img src={home.img} alt="" />
                  <div className="card-info-s">
                    <p>{home.description}</p>
                  </div>
                  <div className="card-cmimi-s">
                    <p>{home.cmimi} ALL</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
