import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card3.css";
export default function Loadingcard3() {
  let getComponentWidth = (valuePx) => {
    return (window.innerWidth * valuePx) / 1920;
  };
  let getComponentHeight = (valuePx) => {
    return (window.innerHeight * valuePx) / 1080;
  };
  return (
    <>
      {" "}
      <div className="grid-item-3">
        <SkeletonTheme>
          <p>
            <Skeleton
              width={getComponentWidth(399)}
              height={getComponentHeight(401)}
            />
            <Skeleton
              width={getComponentWidth(216)}
              height={getComponentHeight(44)}
            />
            <Skeleton
              width={getComponentWidth(300)}
              height={getComponentHeight(35)}
            />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-3">
        <SkeletonTheme>
          <p>
            <Skeleton
              width={getComponentWidth(399)}
              height={getComponentHeight(401)}
            />
            <Skeleton
              width={getComponentWidth(216)}
              height={getComponentHeight(44)}
            />
            <Skeleton
              width={getComponentWidth(300)}
              height={getComponentHeight(35)}
            />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-3">
        <SkeletonTheme>
          <p>
            <Skeleton
              width={getComponentWidth(399)}
              height={getComponentHeight(401)}
            />
            <Skeleton
              width={getComponentWidth(216)}
              height={getComponentHeight(44)}
            />
            <Skeleton
              width={getComponentWidth(300)}
              height={getComponentHeight(35)}
            />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
}
