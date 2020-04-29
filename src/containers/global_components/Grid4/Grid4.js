import React, { useState, useEffect } from "react";
import axios from "axios";
import Loadingcard4 from "../Card4/LoadingCard4";
import Card4 from "../Card4/Card4";
import "./Grid4.css";
export default function Grid4() {
  const [homes, sethomes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://rent-project.herokuapp.com/homes/NormalHomes")
      .then((res) => {
        const info = res.data;
        sethomes(info);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid-container-4  color-white">
      {loading ? (
        <Loadingcard4 />
      ) : (
        homes.map((home) => {
          return <Card4 home={home} key={home._id} />;
        })
      )}
    </div>
  );
}
