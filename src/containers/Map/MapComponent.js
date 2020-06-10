import React, { useState } from "react";
import { Skeleton } from "@material-ui/lab";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MapComponent.css";
import area from "./assets/area-white.svg";
import bedrooms from "./assets/bedrooms-white.svg";
import furnished from "./assets/furnished-white.svg";
import people from "./assets/people-white.svg";
import premium from "./assets/Premium.svg";
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
    JSON.parse(localStorage.getItem("userlocation")) || {
      latitude: 41.327545,
      longitude: 19.818699,
    }
  );

  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("locationNearMe")) || {
      latitude: 41.327545,
      longitude: 19.818699,
    }
  ); //gets the location from user or uses the geolocation of tirana


  //toggle states
  const [listComponent, setListComponent] = useState(false);
  const [showList, setShowList] = useState(false);
  const [showSettings, setShowSettings] = useState(false)
  //end toggle

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
      default:
        alert("Something went wrong !!");
    }
  }

  //gets api Data from database
  function getAPI(position) {
    setListComponent(!listComponent);
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
        localStorage.setItem("locationNearMe", JSON.stringify(value));
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

  function getManualLocation(vl) {
    axios
      .get(
        `https://rent-project.herokuapp.com/nearme/${vl.latitude}/${vl.longitude}`
      )
      .then((res) => {
        const info = res.data;
        setLocation(vl);
        localStorage.setItem("locationNearMe", JSON.stringify(vl));
        setUserLocation(vl);
        localStorage.setItem("userlocation", JSON.stringify(vl));
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
      <button className={listComponent ? "toggleList openedComponent" : "toggleList"}
        onClick={() => {
          setListComponent(!listComponent);
          setShowList(true);
          setShowSettings(false);
        }}>
        {listComponent ? <i className="fas fa-caret-left"></i> : <i className="fas fa-caret-right"></i>}
      </button>
      <button className={listComponent ? "toggleCoords openedComponent" : "toggleCoords"}
        onClick={() => {
          setListComponent(true);
          setShowList(false);
          setShowSettings(true);
        }}>
        <i className="fas fa-cog"></i>
      </button>
      {loading ? (
        <div className="map-modal">
          <h1>Find houses near you</h1>
          <div className="map-modal-btns">
            <button onClick={() => {
              localStorage.setItem("locationNearMe", JSON.stringify(location));
              getLocation();
              // setListComponent(true);
              setShowList(true);
            }}>Use your current location</button>
            <button onClick={() => {
              setListComponent(true);
              setShowSettings(true);
              setLoading(false);
            }}>Set your location</button>
          </div>
        </div>
      ) : (
          <></>
        )}

      {listComponent ? (
        <div className={"nearme-home-list"}>
          {loading ? (
            <ShowLoadingHomes num={6} />
          ) : (showList ?
            (homes.map((elem) => {
              return (
                <div
                  key={elem._id}
                  className={elem.premium ? "nearme-list-elem nearme-home-premium" : "nearme-list-elem nearme-home-normal"}
                >
                  {elem.premium ? <img src={premium} alt="p" className="nearme-list-img-premium" /> : <></>}
                  <img src={elem.img[0]} alt="" className="nearme-list-elem-img" />
                  <div className={elem.premium ? "nearme-list-price nearme-home-premium" : "nearme-list-price nearme-home-normal"}>
                    <p>{elem.price} All</p>
                  </div>
                  <div className="nearme-list-desc">
                    <h1>{elem.description}</h1>
                  </div>
                  <div className="nearme-list-info">
                    <div className="nearme-list-info-elem"><img src={area} alt="area" /><i>{elem.area} m<sup>2</sup></i></div>
                    <div className="nearme-list-info-elem"><img src={people} alt="people" /><i>{elem.tenants}</i></div>
                    <div className="nearme-list-info-elem"><img src={furnished} alt="area" />{elem.furnished ? <i>E mobiluar</i> : <i>Jo e mobiluar</i>}</div>
                    <div className="nearme-list-info-elem"><img src={bedrooms} alt="area" /><i>{elem.bedrooms}</i></div>
                  </div>
                  <div className="nearme-list-btns">
                    <Link to={`/houses/${elem._id}`}>
                      <button className={elem.premium ? "premuim-btn" : "normal-btn"}>More Info </button>
                    </Link>
                    <button className={elem.premium ? "premuim-btn" : "normal-btn"} onClick={() => {
                      const vl = {
                        latitude: elem.location.lat,
                        longitude: elem.location.long,
                      };
                      setLocation(vl);
                      setZoom(16);
                      setActiveHome(elem);
                    }}>View Location </button>
                  </div>
                </div>
              );
            })) : (showSettings ? (
              <div>
                <h1>Your Location</h1>
                <input type="number" placeholder="Latitude" value={userLocation.latitude} />
                <input type="number" placeholder="Latitude" value={userLocation.longitude} />
                <button>Search in this Location</button>
              </div>) : (<>lool</>))
            )}
        </div>) : <></>}

      <div style={{ height: "100vh" }}>
        <Map center={[location.latitude, location.longitude]} zoom={zoom} onClick={(e) => {
          const vl = {
            latitude: e.latlng.lat,
            longitude: e.latlng.lng
          };

          setLocation(vl);
          setUserLocation(vl);
          getManualLocation(vl);
          setShowList(true);
          setShowSettings(false);
          setListComponent(true);
        }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {localStorage.getItem("locationNearMe") === undefined ? (
            <Marker position={[41.327545, 19.818699]} icon={House} />
          ) : (
              <Marker position={[userLocation.latitude, userLocation.longitude]} />
            )}

          {homes.map((home) => {
            return (
              <Marker
                position={[home.location.lat, home.location.long]}
                key={home._id}
                onclick={() => {
                  setActiveHome(home);
                  const value = {
                    latitude: home.location.lat,
                    longitude: home.location.long
                  }
                  setLocation(value);
                  localStorage.setItem("locationNearMe", JSON.stringify(value));
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
              <div className={activeHome.premium ? "popup nearme-home-premium" : "popup nearme-home-normal"}>
                <img
                  src={activeHome.img}
                  alt=""
                />
                <h3>{activeHome.description}</h3>
                <h6 className={activeHome.premium ? "nearme-home-premium" : "nearme-home-normal"}>{activeHome.price} All</h6>

                <Link to={`/houses/${activeHome._id}`}>
                  <button className={activeHome.premium ? "pop-up-visit-btn premuim-btn" : "pop-up-visit-btn normal-btn"}>Visit home</button>
                </Link>
              </div>
            </Popup>
          )}
        </Map>
      </div>
    </div>
  );
}
