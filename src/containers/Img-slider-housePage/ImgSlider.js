import React from "react";
import "./ImgSlider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function ImgSlider({ img, loading }) {
  return (
    <div className="img-slider-container">
      {loading ? (
        <h1>loading ....</h1>
      ) : (
        <Carousel responsive={responsive}>
          {img.map((e) => {
            return <img src={e} />;
          })}
        </Carousel>
      )}
    </div>
  );
}
