import React from "react";
import "../components/homepage components/homepage.css";
import RentPage from "../components/rentPage/RentPage";
import Header from "../components/homepage components/Header";
const AllHomes = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
        <RentPage />
      </div>
    </>
  );
};

export default AllHomes;
