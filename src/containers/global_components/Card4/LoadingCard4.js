import React from "react";

import { Skeleton } from "@material-ui/lab";
export default function LoadingCard4() {
  return (
    <>
      <div className="grid-item-4">
        <Skeleton animation="wave" width={353} height={452} />
      </div>
      <div className="grid-item-4">
        <Skeleton animation="wave" width={353} height={452} />
      </div>
      <div className="grid-item-4">
        <Skeleton animation="wave" width={353} height={452} />
      </div>
      <div className="grid-item-4">
        <Skeleton animation="wave" width={353} height={452} />
      </div>
    </>
  );
}
