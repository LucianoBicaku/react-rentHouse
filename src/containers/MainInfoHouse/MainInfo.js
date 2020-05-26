import React from "react";
import Lloji from "./Path 456.svg";
import Sip from "./Path 448.svg";
import Dhoma from "./Path 449.svg";
import Mobilimi from "./Layer 2.svg";
import NrDhomash from "./Group 205.svg";
import "./MainInfo.css";

export default function MainInfo({
  type,
  area,
  rooms,
  furnished,
  tenants,
  price,
  loading,
}) {
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
          <div className="main-info-house">
            <div className="main-info-house-item ">
              <img src={Lloji} alt="lloji" />
              <p>{type}</p>
            </div>
            <div className="main-info-house-item ">
              <img src={Sip} alt="sip" />
              <p>
                {area}m<sup>2</sup>
              </p>
            </div>
            <div className="main-info-house-item ">
              <img src={Dhoma} alt="lloji" />
              <p> {rooms} Bedrooms</p>
            </div>
            <div className="main-info-house-item ">
              <img src={Mobilimi} alt="lloji" />
              {furnished ? <p> Mobiluar</p> : <p> Jo i mobiluar</p>}
            </div>
            <div className="main-info-house-item ">
              <img src={NrDhomash} alt="lloji" />
              <p> Room for {tenants}</p>
            </div>
            <div className="main-info-house-item ">
              {" "}
              <p className="main-info-cmimi">{price} ALL</p>
            </div>
          </div>
        )}
    </>
  );
}
