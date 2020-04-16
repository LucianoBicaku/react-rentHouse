import React from "react";
import "./rentpage.css";
import FilterSection from "./FilterSection";
import Houses from "./Hauses";
export default function RentPage() {
  return (
    <div className="rentPage">
      <FilterSection />
      <Houses />
    </div>
  );
}
