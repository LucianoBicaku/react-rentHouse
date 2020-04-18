import React from "react";
import "../components/homepage components/homepage.css";
import "../components/rentPage/rentpage.css";
import FilterSection from "../components/rentPage/FilterSection";
import Houses from "../components/rentPage/Hauses";
import Header from "../components/homepage components/Header";
const AllHomes = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="rentPage">
        <FilterSection />
        <Houses />
      </div>
    </>
  );
};

export default AllHomes;
