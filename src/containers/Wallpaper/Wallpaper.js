import React from "react";
import Header from "../global_components/Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import "./Wallpaper.css";
export default function Wallpaper() {
  return (
    <div className="home-section collor">
      <div className="color"></div>
      <Header />
      <HeroSection />
    </div>
  );
}
