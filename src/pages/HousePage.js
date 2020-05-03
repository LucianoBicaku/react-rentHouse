import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../containers/global_components/Header/DarkHeader";
import HouseDescription from "../containers/houseDescription/HouseDescription";

export default function HousePage({ match }) {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/homes/${match.params.id}`)
      .then((res) => {
        const info = res.data;
        setData(info);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Header />
      <HouseDescription info={data} />
    </>
  );
}
