import React, { useState, useEffect } from "react";
import { Skeleton } from "@material-ui/lab";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import { Link } from "react-router-dom";
import axios from "axios";
import "./MapComponent.css";
function Map() {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 41.327545, lng: 19.818699 }}
    ></GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function TestPage() {
  let value = (par = localStorage.getItem("loading")) => {
    if (par === "true") return true;
    else return false;
  };
  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("location"))
  );
  const [homes, setHomes] = useState(
    JSON.parse(localStorage.getItem("DataApi")) || []
  );

  const [loading, setLoading] = useState(value());

  useEffect(() => {
    getLocation();
  }, []);

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
        `http://localhost:5000/nearme/${location.latitude}/${location.longitude}`
      )
      .then((res) => {
        const info = res.data;
        localStorage.setItem("DataApi", JSON.stringify(res.data));
        setHomes(info);
        localStorage.setItem("loading", false);
        console.log(localStorage.getItem("loading"));
        console.log(value());
        setLoading(value());
        console.log(loading);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

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
                  <img src={elem.img[0]} />
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
      <div
        style={{ width: "100%", height: "100vh" }}
        className={"BackGround-Map"}
      >
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCXjdGTUhQwWDH5txDSEUsuMzPbhowVuCE`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}
