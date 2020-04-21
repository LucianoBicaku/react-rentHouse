import React from "react";
import "../components/homepage components/homepage.css";
import "../components/rentPage/rentpage.css";
import Header from "../components/homepage components/Header";
import RentPageWallpaper from "../components/rentPage/RentPageWallpaper";
import SearchComponent from "../components/rentPage/SearchComponent";
import HomesComponent from "../components/rentPage/HomesComponent";
import Footer from "../components/homepage components/Footer";
const AllHomes = () => {
  return (
    <>
      <div className="navbar-dark">
        <Header />
      </div>

      <RentPageWallpaper />
      <SearchComponent />
      <HomesComponent />
      <Footer />
    </>
  );
};

export default AllHomes;
