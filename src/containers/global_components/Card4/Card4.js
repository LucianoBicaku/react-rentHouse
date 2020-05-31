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
            Rruga: {props.home.adress.street.split(' ').map(w => w.substring(0, 1).toUpperCase() + w.substring(1)).join(' ')}
          </p>
          <p className={"s-card-info-desc"}> {props.home.description}</p>
        </div>
        <div className="card-cmimi-s">
          <p>{props.home.price} ALL</p>
        </div>
      </div>
    </div>
  );
}
