import React from "react";
import "../components/homepage components/homepage.css";
import "../components/rentPage/rentpage.css";
import Header from "../components/homepage components/Header";
import RentPageWallpaper from "../components/rentPage/RentPageWallpaper";
import SearchComponent from "../components/rentPage/SearchComponent";
import HomesComponent from "../components/rentPage/HomesComponent";
const AllHomes = () => {
  return (
    <>
      <div className="navbar-dark">
        <Header />
      </div>

      <RentPageWallpaper />
      <SearchComponent />
      <HomesComponent />
    </>
  );
};

export default AllHomes;
