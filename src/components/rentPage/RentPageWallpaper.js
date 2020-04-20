import React from "react";
import IMG from "../homepage components/img/rent-house-img.png";
import "./rentpage.css";
export default function RentPageWallpaper() {
  return (
    <div className="rent-wallpaper-section">
      <img src={IMG} alt="kot" />
      <h1>Houses avaible to rent!</h1>
    </div>
  );
}
