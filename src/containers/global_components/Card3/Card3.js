import React from "react";
import Featured from "../../../img/Path 261.svg";
import "./Card3.css";
export default function Card3(props) {
  return (
    <div className="grid-item-3" key={props.home._id}>
      <div className="card1">
        <img src={props.home.img} alt="" />
        <div className="card1-info">
          <p>{props.home.description}</p>
        </div>
        <div className="premium">
          <img src={Featured} alt="" />
        </div>
        <p className="cmimi">{props.home.cmimi} ALL</p>
      </div>
    </div>
  );
}
