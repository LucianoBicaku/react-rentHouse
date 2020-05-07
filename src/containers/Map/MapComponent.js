import React, { useState, useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import L from "leaflet";
import axios from "axios";
import homeIcon from "../../img/homeIcon.svg";
import "./MapComponent.css";

export const icon = new Icon({
  iconUrl: homeIcon,
  iconSize: [25, 25],
});

export default function TestPage() {
  const checkIfDataExists = () => {
    if (localStorage.getItem("DataApi") == null) return true;
    else return false;
  };

  let value = (par = localStorage.getItem("loading")) => {
    if (par === "true") return true;
    else return false;
  };

  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location")) || {
      latitude: 41.327545,
      longitude: 19.818699,
    }
  );
  const [homes, setHomes] = useState(
    JSON.parse(localStorage.getItem("DataApi")) || []
  );
  const [loading, setLoading] = useState(checkIfDataExists());

  const [activeHome, setActiveHome] = useState(null);

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function getCoordinates(position) {
    const value = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    localStorage.setItem("location", JSON.stringify(value));
    setLocation(value);
  }

  function getAPI() {
    axios
      .get(
        `https://rent-project.herokuapp.com/nearme/${location.latitude}/${location.longitude}`
      )
      .then((res) => {
        const info = res.data;
        localStorage.setItem("DataApi", JSON.stringify(res.data));
        setHomes(info);
        localStorage.setItem("loading", false);
        setLoading(value());
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getLocation();
  }, []);

  function ShowLoadingHomes(props) {
    const elemnts = [];
    for (let index = 0; index < props.num; index++) {
      elemnts.push(
        <li>
          <div className="img-loader-map">
            <Skeleton animation="wave" width={150} height={200} />
          </div>
          <div style={{ marginTop: "30px" }}>
            <Skeleton animation="wave" width={210} height={50} />
            <Skeleton animation="wave" width={110} height={50} />
            <Skeleton animation="wave" width={125} height={50} />
          </div>
        </li>
      );
    }
    return elemnts;
  }

  return (
    <div>
      {loading ? (
        <button
          onClick={() => {
            getAPI();

            console.log(checkIfDataExists());
          }}
          className={"NearMeButton"}
        >
          Near me
        </button>
      ) : (
        <></>
      )}

      <div className={"homes-map-list"}>
        {loading ? (
          <ShowLoadingHomes num={6} />
        ) : (
          homes.map((elem) => {
            return (
              <li key={elem._id}>
                <div className="img-loader-map">
                  <img src={elem.img[0]} alt="" />
                </div>
                <div className="text-info-map">
                  <i>{elem.description} </i>
                  <i>{elem.lloji}</i>
                  <i>{elem.cmimi}All</i>
                  <Link to={`/houses/${elem._id}`}>
                    <button>View</button>
                  </Link>
                </div>
              </li>
            );
          })
        )}
      </div>
      <div>
        <Map center={[location.latitude, location.longitude]} zoom={16}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {localStorage.getItem("location") == null ? (
            <Marker position={[41.327545, 19.818699]} />
          ) : (
            <Marker position={[location.latitude, location.longitude]} />
          )}

          {homes.map((home) => {
            return (
              <Marker
                position={[home.location.lat, home.location.long]}
                key={home._id}
                onClick={() => {
                  setActiveHome(home);
                }}
              />
            );
          })}

          {activeHome && (
            <Popup
              position={[activeHome.location.lat, activeHome.location.long]}
              onClose={() => {
                setActiveHome(null);
              }}
            >
              <div>
                <h3>{activeHome.description}</h3>
                <h6>{activeHome.cmimi}</h6>
                <Link to={`/houses/${activeHome._id}`}>
                  <button>Visit home</button>
                </Link>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}
