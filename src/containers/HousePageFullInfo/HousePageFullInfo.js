import React from "react";
import "./HousePageFullInfo.css";
import Img from "./Path 458.svg";
import Animals from "./Animals.svg";
import balcony from "./balcony.svg";
import BedRoom from "./BedRoom.svg";
import Elevator from "./Elevator.svg";
import Garden from "./Garden.svg";
import Kitchnware from "./Kitchenware.svg";
import airConditioner from "./airConditioner.svg";
import Bathroom from "./outline.svg";
import Parking from "./Parking.svg";
import television from "./televition v2.svg";
import WiFi from "./WiFi.svg";
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
  nrKatesh,
  nrBedrooms,
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
              <div className="features-2-item">Total floors {nrKatesh}</div>
              <div className="features-2-item">Condition New</div>
              <div className="features-2-item">Rooms {dhoma}</div>
              <div className="features-2-item">
                <img src={BedRoom} alt="bedroom" />
                BedRooms {nrBedrooms}
              </div>
              <div className="features-2-item">
                <img src={Bathroom} alt="Bathroom" />
                BathRooms {nrbanjosh}
              </div>
            </div>
            <div className="features-3">
              <div className="features-3-item">
                <img src={Parking} alt="Parking" />
                {parkim ? (
                  <p>Parking </p>
                ) : (
                  <del>
                    <p>Parking</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                {" "}
                <img src={Elevator} alt="Elevator" />
                {ashensor ? (
                  <p>Elevator </p>
                ) : (
                  <del>
                    <p>Elevator</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={WiFi} alt="WiFi" />
                {true ? (
                  <p>WiFi </p>
                ) : (
                  <del>
                    <p>WiFi</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={Animals} alt="Animals" />
                {kafshe ? (
                  <p>Pets Allowed </p>
                ) : (
                  <del>
                    <p>Pets Allowed</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={balcony} alt="balcony" />
                {ballkon ? (
                  <p>Balcony </p>
                ) : (
                  <del>
                    <p>Balcony</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={Garden} alt="Garden" />
                {false ? (
                  <p>Garden </p>
                ) : (
                  <del>
                    <p>Garden</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={television} alt="Television" />
                {tv ? (
                  <p>TV </p>
                ) : (
                  <del>
                    <p>TV</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={Kitchnware} alt="Kitchenware" />
                {sendeGatimi ? (
                  <p>Kitchenware </p>
                ) : (
                  <del>
                    <p>Kitchenware</p>
                  </del>
                )}
              </div>
              <div className="features-3-item">
                <img src={airConditioner} alt="" />
                {kondicioner ? (
                  <p>Air Conditioning </p>
                ) : (
                  <del>
                    <p>Air Conditioning</p>
                  </del>
                )}
              </div>
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
