import React from "react";
import "./InfoSection.css";
import Ils1 from "../../img/Group 9.svg";
import Ils2 from "../../img/Group 10.svg";
import Ils3 from "../../img/Group 11.svg";

export default function InfoSection() {
  return (
    <div className="info-section">
      <h1>How does it work?</h1>
      <div className="grid-info-3">
        <div className="grid-item-3 info-item">
          <img src={Ils1} alt="" />
          <p>Add your information on the website...</p>
        </div>

        <div className="grid-item-3 info-item">
          <img src={Ils2} alt="" />
          <p>And we find you the perfect place!</p>
        </div>
        <div className="grid-item-3 info-item">
          <img src={Ils3} alt="" />
          <p>And you might also find a new friend!</p>
        </div>
      </div>
    </div>
  );
}
