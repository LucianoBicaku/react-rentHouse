import React from "react";
import "../components/homepage components/homepage.css";
import "../components/rentPage/rentpage.css";
import DarkHeader from "../containers/global_components/Header/DarkHeader";
import RentPageWallpaper from "../containers/RentPageWallpaper/RentPageWallpaper";
// import SearchComponent from "../containers/SearchComponent/SearchComponent";
import GridRentHouses from "../containers/Grid-RentHouses/GridRentHouse";
import Footer from "../containers/global_components/Footer/Footer";
const AllHomes = () => {
  return (
    <>
      <DarkHeader />
      <RentPageWallpaper />
      {/* <SearchComponent /> */}
      <GridRentHouses />
      <Footer />
    </>
  );
};

export default AllHomes;
