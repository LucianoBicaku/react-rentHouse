import React from "react";
import "./SearchComponent.css";
import PriceDropDown from "./PriceDropDown";
import RoomatesDropDow from "./RoomatesDropDown";
import RoomsDropDown from "./RoomsDropDown";
export default function SearchComponent() {
  return (
    <div className="search-component">
      <form className="serch-form">
        <label htmlFor="location"> Location </label>
        <br />
        <input type="text" name="location" id="location" />
        <i className="fas fa-search search-component-icon"></i>
      </form>
      <PriceDropDown />
      <RoomatesDropDow />
      <RoomsDropDown />
    </div>
  );
}
