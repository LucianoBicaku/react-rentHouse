import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function LoadingCard4() {
  return (
    <>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton width={303} height={400} />
            <Skeleton width={156} height={40} />
            <Skeleton width={250} height={50} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton width={303} height={400} />
            <Skeleton width={156} height={40} />
            <Skeleton width={250} height={50} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton width={303} height={400} />
            <Skeleton width={156} height={40} />
            <Skeleton width={250} height={50} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-4">
        <SkeletonTheme color="royalblue" highlightColor="rgb(95, 131, 236)">
          <p>
            <Skeleton width={303} height={400} />
            <Skeleton width={156} height={40} />
            <Skeleton width={250} height={50} />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
}