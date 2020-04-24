import React from "react";
import "./LoadingCard.css";
export default function LoadingCard() {
  return (
    <>
      <div className="grid-item-4">
        <div className="card1 card-blank">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
