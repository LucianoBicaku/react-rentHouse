import React from "react";
import "./Card4.css";
export default function Card4(props) {
  return (
    <div className="grid-item-4" key={props.home._id}>
      <div className="card-s">
        <img src={props.home.img} alt="" />
        <div className="card-info-s">
          <p>{props.home.description}</p>
        </div>
        <div className="card-cmimi-s">
          <p>{props.home.cmimi} ALL</p>
        </div>
      </div>
    </div>
  );
}
