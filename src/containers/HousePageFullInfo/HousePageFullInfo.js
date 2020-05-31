import React, { useState } from "react";
import "./HousePageFullInfo.css";
import Img from "./assests/DescriptionLogo.svg";
import AnimalsTrue from "./assests/AnimalsEncluded.svg";
import AnimalsFalse from "./assests/AnimalsExcluded.svg";
import BalconyTrue from "./assests/balconyEncluded.svg";
import BalconyFalse from "./assests/balconyExcluded.svg";
import BedRoom from "./assests/BedRooms.svg";
import ElevatorTrue from "./assests/elevatorTrue.svg";
import ElevatorFalse from "./assests/ElevatorExcluded.svg";
import GardenTrue from "./assests/GardenEncluded.svg";
import GardenFalse from "./assests/GardenExcluded.svg";
import KitchnwareTrue from "./assests/kitchenwareEncluded.svg";
import KitchnwareFalse from "./assests/kitchenwareExcluded.svg";
import airConditionerTrue from "./assests/AirConditionerEncluded.svg";
import airConditionerFalse from "./assests/AirConditionerExcluded.svg";
import Bathroom from "./assests/Bathrooms.svg";
import ParkingTrue from "./assests/ParkingEncluded.svg";
import ParkingFalse from "./assests/ParkingExcluded.svg";
import televisionTrue from "./assests/TvEncluded.svg";
import televisionFalse from "./assests/TvExcluded.svg";
import WiFiTrue from "./assests/WifiEncluded.svg";
import WiFiFalse from "./assests/WifiExcluded.svg";
import electricityTrue from "./assests/ElectricityEncluded.svg"
import electricityFalse from "./assests/ElectricityExcluded.svg"
import waterTrue from "./assests/WaterEncluded.svg"
import waterFalse from "./assests/WaterExcluded.svg"
import enternetTrue from "./assests/EnternetEncluded.svg"
import enternetFalse from "./assests/EnternetExcluded.svg"
import Landlord from "./assests/LandlordIMG.png";
import tfloors from "./assests/TotalFloors.svg";
import floors from "./assests/Floors.svg";
import condition from "./assests/Condition.svg";
import room from "./assests/Rooms.svg";
import favorites from "./assests/Favorites.svg";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { Map, TileLayer, Marker } from "react-leaflet";

export default function HousePageFullInfo({
  descrption,
  location,
  floor,
  bathrooms,
  parking,
  air_conditioner,
  elevator,
  animals,
  balcony,
  kitchenware,
  tv,
  rooms,
  loading,
  tolalFloors,
  bedrooms,
  garden,
  wifi,
  water,
  electricity,
  enternet,
}) {
  //   descrption = descrption.toUpperCase() + descrption.slice(1);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(new Date().getTime() + (6 * 24 * 60 * 60 * 1000)),
      key: 'selection'
    }
  ]);
  return (
    <div className="house-page-main">
      <div className="house-page-container">
        <div className="house-page-header">
          <img alt="logos" src={Img} />
          <h1>{descrption}</h1>
          <div className="add-to-favorites">
            <img src={favorites} alt="favourites" />
            <p>Add to favorites</p>
          </div>
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
            <p className="in-price-included">*In price included:</p>
            <div className="features-3 padding-bottom-border">
              <div className="features-3-item">
                {electricity ? (
                  <>
                    <img src={electricityTrue} alt="electricity" />
                    <p style={{ color: "#0467d7" }}>electricity </p>
                  </>
                ) : (
                    <><img src={electricityFalse} alt="electricity" />
                      <del>
                        <p style={{ color: "gray" }}>electricity</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">
                {water ? (
                  <>
                    <img src={waterTrue} alt="water" />
                    <p style={{ color: "#0467d7" }}>water </p>
                  </>
                ) : (
                    <><img src={waterFalse} alt="water" />
                      <del>
                        <p style={{ color: "gray" }}>water</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">
                {enternet ? (
                  <>
                    <img src={enternetTrue} alt="enternet" />
                    <p style={{ color: "#0467d7" }}>enternet </p>
                  </>
                ) : (
                    <><img src={enternetFalse} alt="enternet" />
                      <del>
                        <p style={{ color: "gray" }}>enternet</p>
                      </del>
                    </>
                  )}
              </div>
            </div>
            <div className="features-2">
              <div className="features-2-item"><img src={floors} alt="bedroom" /> <span>Floor</span> <p>{floor}</p></div>
              <div className="features-2-item"><img src={tfloors} alt="bedroom" /><span>Total floors</span> <p>{tolalFloors}</p></div>
              <div className="features-2-item"><img src={condition} alt="bedroom" /><span>Condition</span> <p>New</p></div>
              <div className="features-2-item"><img src={room} alt="bedroom" /><span>Rooms</span> <p>{rooms}</p></div>
              <div className="features-2-item">
                <img src={BedRoom} alt="bedroom" />
                <span>BedRooms</span> <p>{bedrooms}</p>
              </div>
              <div className="features-2-item">
                <img src={Bathroom} alt="Bathroom" />
                <span>BathRooms</span>
                <p>{bathrooms}</p>
              </div>
            </div>
            <div className="features-3">
              <div className="features-3-item">
                {parking ? (
                  <>
                    <img src={ParkingTrue} alt="Parking" />
                    <p style={{ color: "#0467d7" }}>Parking </p>
                  </>
                ) : (
                    <><img src={ParkingFalse} alt="Parking" />
                      <del>
                        <p style={{ color: "gray" }}>Parking</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">
                {elevator ? (
                  <>
                    <img src={ElevatorTrue} alt="Elevator" />
                    <p style={{ color: "#0467d7" }}>Elevator </p>
                  </>
                ) : (
                    <>
                      <img src={ElevatorFalse} alt="Elevator" />
                      <del>
                        <p style={{ color: "gray" }}>Elevator</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">
                {wifi ? (
                  <>
                    <img src={WiFiTrue} alt="WiFi" />
                    <p style={{ color: "#0467d7" }}>WiFi </p>
                  </>
                ) : (
                    <>
                      <img src={WiFiFalse} alt="WiFi" />
                      <del>
                        <p style={{ color: "gray" }}>WiFi</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {animals ? (
                  <>
                    <img src={AnimalsTrue} alt="Animals" />
                    <p style={{ color: "#0467d7" }}>Animals </p>
                  </>
                ) : (
                    <>
                      <img src={AnimalsFalse} alt="Animals" />
                      <del>
                        <p style={{ color: "gray" }}>Animals</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {balcony ? (
                  <>
                    <img src={BalconyTrue} alt="Balcony" />
                    <p style={{ color: "#0467d7" }}>Balcony </p>
                  </>
                ) : (
                    <>
                      <img src={BalconyFalse} alt="Balcony" />
                      <del>
                        <p style={{ color: "gray" }}>Balcony</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {garden ? (
                  <>
                    <img src={GardenTrue} alt="Garden" />
                    <p style={{ color: "#0467d7" }}>Garden </p>
                  </>
                ) : (
                    <>
                      <img src={GardenFalse} alt="Garden" />
                      <del>
                        <p style={{ color: "gray" }}>Garden</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {tv ? (
                  <>
                    <img src={televisionTrue} alt="TV" />
                    <p style={{ color: "#0467d7" }}>TV </p>
                  </>
                ) : (
                    <>
                      <img src={televisionFalse} alt="TV" />
                      <del>
                        <p style={{ color: "gray" }}>TV</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {kitchenware ? (
                  <>
                    <img src={KitchnwareTrue} alt="Kitchenware" />
                    <p style={{ color: "#0467d7" }}>Kitchenware </p>
                  </>
                ) : (
                    <>
                      <img src={KitchnwareFalse} alt="Kitchenware" />
                      <del>
                        <p style={{ color: "gray" }}>Kitchenware</p>
                      </del>
                    </>
                  )}
              </div>
              <div className="features-3-item">

                {air_conditioner ? (
                  <>
                    <img src={airConditionerTrue} alt="Air Conditioner" />
                    <p style={{ color: "#0467d7" }}>Air Conditioner </p>
                  </>
                ) : (
                    <>
                      <img src={airConditionerFalse} alt="Air Conditioner" />
                      <del>
                        <p style={{ color: "gray" }}>Air Conditioner</p>
                      </del>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="house-page-fullinfo-content">
          <div className="house-page-description">
            <p>Availability</p>
          </div>
          <div className="house-page-value calendar">
            <DateRange
              onChange={() => { console.log(dates) }}
              months={3}
              showDateDisplay={false}
              ranges={dates}
              direction="horizontal"
            />
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
