import React from "react";
import { Skeleton } from "@material-ui/lab";

export default function Loadingcard3() {
  return (
    <>
      {" "}
      <div className="grid-item-3">
        <Skeleton animation="wave" width={477} height={595} />
      </div>
      <div className="grid-item-3">
        <Skeleton animation="wave" width={477} height={595} />
      </div>
      <div className="grid-item-3">
        <Skeleton animation="wave" width={477} height={595} />
      </div>
    </>
  );
}
