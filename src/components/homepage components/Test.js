import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";

export default function Test() {
  const [api, setApi] = useState([]);
  const premium = api.filter((el) => el.premium == true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/homes")
      .then((res) => {
        const info = res.data;
        setApi(info);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <button onClick={() => console.log(api)}>click</button>
      <button onClick={() => console.log(premium)}>premiu</button>
    </>
  );
}
