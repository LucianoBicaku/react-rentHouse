import React from "react";
import Featured from "../../../img/Path 261.svg";
import IMG from "../../../img/Path 315.svg";
import "./Card3.css";
export default function Card3(props) {
  return (
    <div className="grid-item-3" key={props.home._id}>
      <div className="card1">
        <img src={props.home.img} alt="" className="card1-wallpaper" />
        <div className="card1-info">
          <p className="card1-info-adress">
            <img src={IMG} alt="" />
            Rruga: {props.home.adress.street.split(' ').map(w => w.substring(0, 1).toUpperCase() + w.substring(1)).join(' ')}
          </p>
          <p className="card1-info-text">{props.home.description}</p>
        </div>
        <div className="premium">
          <img src={Featured} alt="" />
        </div>
        <p className="cmimi">{props.home.price} ALL</p>
      </div>
    </div>
  );
}
