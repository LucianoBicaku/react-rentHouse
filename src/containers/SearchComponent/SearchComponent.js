import React from "react";
import "./SearchComponent.css";
export default function SearchComponent() {
  return (
    <div className="search-component">
      <form>
        <label htmlFor="location"> Location </label>
        <br />
        <input type="text" name="location" id="location" />
      </form>
      <button>Price</button>
      <button>Roomates</button>
      <button>Rooms</button>
    </div>
  );
}
