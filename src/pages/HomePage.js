import React from "react";
import Wallpaper from "../containers/Wallpaper/Wallpaper";
import Offers from "../containers/OffersSection/Offers";
import InfoSection from "../containers/InfoSection/InfoSection";
import SellerSection from "../containers/SellerSection/SellerSection";
import Footer from "../containers/global_components/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <Wallpaper />
      <Offers />
      <InfoSection />
      <SellerSection />
      <Footer />
    </>
  );
};

export default HomePage;
