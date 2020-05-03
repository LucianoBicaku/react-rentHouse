import React, { useState, useEffect } from "react";
import LoadingCard3 from "../Card3/Loadingcard3";
import Card3 from "../Card3/Card3";
import { Link } from "react-router-dom";

import axios from "axios";
import "./Grid3.css";

export default function Grid3() {
  const [homes, setHomes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://rent-project.herokuapp.com/homes/premiumHomes")
      .then((res) => {
        const info = res.data.slice(0, 9);
        setHomes(info);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="grid-container-3">
      {loading ? (
        <LoadingCard3 />
      ) : (
        homes.map((home) => {
          return (
            <Link to={`/houses/${home._id}`}>
              <Card3 home={home} key={home._id} />
            </Link>
          );
        })
      )}
    </div>
  );
}
