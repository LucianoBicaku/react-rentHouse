import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card3.css";
export default function Loadingcard3() {
  return (
    <>
      {" "}
      <div className="grid-item-3">
        <SkeletonTheme color="#e79b3d" highlightColor="#f5bc64">
          <p>
            <Skeleton width={399} height={401} />
            <Skeleton width={216} height={64} />
            <Skeleton width={300} height={35} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-3">
        <SkeletonTheme color="#e79b3d" highlightColor="#f5bc64">
          <p>
            <Skeleton width={399} height={401} />
            <Skeleton width={216} height={64} />
            <Skeleton width={300} height={35} />
          </p>
        </SkeletonTheme>
      </div>
      <div className="grid-item-3">
        <SkeletonTheme color="#e79b3d" highlightColor="#f5bc64">
          <p>
            <Skeleton width={399} height={401} />
            <Skeleton width={216} height={64} />
            <Skeleton width={300} height={35} />
          </p>
        </SkeletonTheme>
      </div>
    </>
  );
}
