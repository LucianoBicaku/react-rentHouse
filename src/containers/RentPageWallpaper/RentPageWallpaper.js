import React from "react";
import IMG from "../../img/rent-house-img.png";
import "./RentPageWallpaper.css";
export default function RentPageWallpaper() {
  return (
    <div className="rent-wallpaper-section">
      <img src={IMG} alt="kot" />
      <h1>Houses avaible to rent!</h1>
    </div>
  );
}
