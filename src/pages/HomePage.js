import React from "react";
import Info from "../components/homepage components/Info";
import Offers from "../components/homepage components/Offers";
import Seller from "../components/homepage components/Seller";
import Footer from "../components/homepage components/Footer";

import HomeSection from "../components/homepage components/HomeSection";
const HomePage = () => {
  return (
    <>
      <HomeSection />
      <Offers />
      <Info />
      <Seller />
      <Footer />
    </>
  );
};

export default HomePage;
