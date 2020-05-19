import React from "react";
import Lloji from "./Path 456.svg";
import Sip from "./Path 448.svg";
import Dhoma from "./Path 449.svg";
import Mobilimi from "./Layer 2.svg";
import NrDhomash from "./Group 205.svg";
import "./MainInfo.css";

export default function MainInfo({
  lloji,
  sip,
  dhoma,
  mobiluar,
  nr_personash,
  cmimi,
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
            <p>{lloji}</p>
          </div>
          <div className="main-info-house-item ">
            <img src={Sip} alt="sip" />
            <p>
              {sip}m<sup>2</sup>
            </p>
          </div>
          <div className="main-info-house-item ">
            <img src={Dhoma} alt="lloji" />
            <p>{dhoma}Bedrooms</p>
          </div>
          <div className="main-info-house-item ">
            <img src={Mobilimi} alt="lloji" />
            {mobiluar ? <p>Mobiluar</p> : <p>Jo i mobiluar</p>}
          </div>
          <div className="main-info-house-item ">
            <img src={NrDhomash} alt="lloji" />
            <p>Room for {nr_personash}</p>
          </div>
          <div className="main-info-house-item ">
            {" "}
            <p className="main-info-cmimi">{cmimi} ALL</p>
          </div>
        </div>
      )}
    </>
  );
}
