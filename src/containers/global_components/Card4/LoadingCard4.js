import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingCard4() {
  let getComponentWidth = (valuePx) => {
    return (window.innerWidth * valuePx) / 1920;
  };
  let getComponentHeight = (valuePx) => {
    return (window.innerHeight * valuePx) / 1080;
  };
  return (
    <>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton
              width={getComponentWidth(303)}
              height={getComponentHeight(400)}
            />
            <Skeleton
              width={getComponentWidth(156)}
              height={getComponentHeight(40)}
            />
            <Skeleton
              width={getComponentWidth(250)}
              height={getComponentHeight(50)}
            />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton
              width={getComponentWidth(303)}
              height={getComponentHeight(400)}
            />
            <Skeleton
              width={getComponentWidth(156)}
              height={getComponentHeight(40)}
            />
            <Skeleton
              width={getComponentWidth(250)}
              height={getComponentHeight(50)}
            />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton
              width={getComponentWidth(303)}
              height={getComponentHeight(400)}
            />
            <Skeleton
              width={getComponentWidth(156)}
              height={getComponentHeight(40)}
            />
            <Skeleton
              width={getComponentWidth(250)}
              height={getComponentHeight(50)}
            />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton
              width={getComponentWidth(303)}
              height={getComponentHeight(400)}
            />
            <Skeleton
              width={getComponentWidth(156)}
              height={getComponentHeight(40)}
            />
            <Skeleton
              width={getComponentWidth(250)}
              height={getComponentHeight(50)}
            />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
}
