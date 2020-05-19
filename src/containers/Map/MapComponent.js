import React, { useState } from "react";
import { Skeleton } from "@material-ui/lab";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MapComponent.css";

export const House = new Icon({
  iconUrl: require("./houseIconMap.png"),
  iconSize: [40, 40],
});
const checkIfDataExists = () => {
  if (localStorage.getItem("DataApi") == null) return true;
  else return false;
};

export default function TestPage() {
  //state declaration

  const [userLocation, setUserLocation] = useState(
    JSON.parse(localStorage.getItem("userLocation")) || {
      latitude: 41.327545,
      longitude: 19.818699,
    }
  );

  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location")) || {
      latitude: 41.327545,
      longitude: 19.818699,
    }
  ); //gets the location from user or uses the geolocation of tirana

  const [homes, setHomes] = useState(
    JSON.parse(localStorage.getItem("DataApi")) || []
  ); //homes near you API

  const [loading, setLoading] = useState(checkIfDataExists()); //Loading state used for animation if data is stored in local storage

  const [activeHome, setActiveHome] = useState(null); //used for popup shown when a specific house is clicked

  const [zoom, setZoom] = useState(16);

  //gets user geolocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getAPI, showError);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("We need your location !!");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  //gets api Data from database
  function getAPI(position) {
    const value = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };
    axios
      .get(
        `https://rent-project.herokuapp.com/nearme/${value.latitude}/${value.longitude}`
      )
      .then((res) => {
        const info = res.data;
        setLocation(value);
        localStorage.setItem("location", JSON.stringify(value));
        setUserLocation(value);
        localStorage.setItem("userlocation", JSON.stringify(value));
        setHomes(info);
        localStorage.setItem("DataApi", JSON.stringify(info));
        setLoading(false);
        localStorage.setItem("loading", JSON.stringify(false));
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  //if user has not clicked nera me button , a set of card animation will be showed
  function ShowLoadingHomes(props) {
    const elemnts = [];
    for (let index = 0; index < props.num; index++) {
      elemnts.push(
        <li key={index}>
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
  //save states to local storage

  return (
    <div>
      {loading ? (
        <button
          onClick={() => {
            localStorage.setItem("location", JSON.stringify(location));
            getLocation();
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
              <li
                key={elem._id}
                onClick={() => {
                  const vl = {
                    latitude: elem.location.lat,
                    longitude: elem.location.long,
                  };
                  setLocation(vl);
                  setZoom(16);
                  setActiveHome(elem);
                }}
              >
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
      <div style={{ height: "100vh" }}>
        <Map center={[location.latitude, location.longitude]} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {localStorage.getItem("userlocation") === undefined ? (
            <Marker position={[41.327545, 19.818699]} icon={House} />
          ) : (
            <Marker
              position={[userLocation.latitude, userLocation.longitude]}
            />
          )}

          {homes.map((home) => {
            return (
              <Marker
                position={[home.location.lat, home.location.long]}
                key={home._id}
                onClick={() => {
                  setActiveHome(home);
                }}
                icon={House}
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
                <img
                  src={activeHome.img}
                  style={{ width: "50%", height: "50%", overflow: "hidden" }}
                  alt=""
                />
                <Link to={`/houses/${activeHome._id}`}>
                  <button className="pop-up-visit-btn">Visit home</button>
                </Link>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}
