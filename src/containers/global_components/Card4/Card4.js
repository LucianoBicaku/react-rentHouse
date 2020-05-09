import React from "react";
import IMG from "../../../img/Path 315.svg";
import "./Card4.css";
export default function Card4(props) {
  return (
    <div className="grid-item-4" key={props.home._id}>
      <div className="card-s">
        <img src={props.home.img} alt="" className="card-s-img" />
        <div className="card-info-s">
          <p className="card1-info-s-adress">
            <img src={IMG} alt="" />
            Rruga: {props.home.adress.rruga}
          </p>
          <p className={"s-card-info-desc"}> {props.home.description}</p>
        </div>
        <div className="card-cmimi-s">
          <p>{props.home.cmimi} ALL</p>
        </div>
      </div>
    </div>
  );
}
