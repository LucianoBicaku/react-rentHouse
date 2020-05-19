import React from "react";
import "./HousePageFullInfo.css";
import Img from "./Path 458.svg";
import { Map, TileLayer, Marker } from "react-leaflet";
import Landlord from "./Rectangle 340.png";

export default function HousePageFullInfo({
  descrption,
  location,
  features,
  kati,
  nrbanjosh,
  parkim,
  kondicioner,
  ashensor,
  kafshe,
  ballkon,
  sendeGatimi,
  tv,
  dhoma,
  loading,
}) {
  //   descrption = descrption.toUpperCase() + descrption.slice(1);

  return (
    <div className="house-page-main">
      <div className="house-page-container">
        <div className="house-page-header">
          <img alt="logos" src={Img} />
          <h1>{descrption}</h1>
        </div>
        <div className="house-page-fullinfo-content">
          <div className="house-page-description">
            <p>Location</p>
          </div>
          <div className="house-page-value">
            <div className="location-in-map">
              {!loading ? (
                <Map
                  center={[
                    Object.values(location)[0],
                    Object.values(location)[1],
                  ]}
                  zoom={18}
                >
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker
                    position={[
                      Object.values(location)[0],
                      Object.values(location)[1],
                    ]}
                  />
                </Map>
              ) : (
                <Map center={[41.327572, 19.819281]} zoom={13}>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[41.327572, 19.819281]} />
                </Map>
              )}
            </div>
          </div>
        </div>
        <div className="house-page-fullinfo-content">
          <div className="house-page-description">
            <p>Descrption</p>
          </div>
          <div className="house-page-value">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita
            </p>
          </div>
        </div>
        <div className="house-page-fullinfo-content">
          <div className="house-page-description">
            <p>Specifics</p>
          </div>
          <div className="house-page-value">
            <div className="features-2">
              <div className="features-2-item">Floor {kati}</div>
              <div className="features-2-item">Total floors 4</div>
              <div className="features-2-item">Condition New</div>
              <div className="features-2-item">Rooms {dhoma}</div>
              <div className="features-2-item">BedRooms {dhoma}</div>
              <div className="features-2-item">BathRooms {nrbanjosh}</div>
            </div>
            <div className="features-3">
              <div className="features-3-item"></div>
              <div className="features-3-item">2</div>
              <div className="features-3-item">3</div>
              <div className="features-3-item">4</div>
              <div className="features-3-item">5</div>
              <div className="features-3-item">6</div>
              <div className="features-3-item">7</div>
              <div className="features-3-item">8</div>
              <div className="features-3-item">9</div>
            </div>
          </div>
        </div>
        <div className="house-page-fullinfo-content">
          <div className="house-page-description">
            <p>Availability</p>
          </div>
          <div className="house-page-value">
            <div className="kalendar">Kalendar</div>
          </div>
        </div>
      </div>
      <div>
        <div className="house-page-landlord">
          <img alt="foto" src={Landlord} />
          <p>Landlord name</p>
          <button className="book-btn">Book Here</button>
        </div>
      </div>
    </div>
  );
}
