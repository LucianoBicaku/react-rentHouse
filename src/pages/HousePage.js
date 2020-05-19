import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../containers/global_components/Header/DarkHeader";
import ImgSlider from "../containers/Img-slider-housePage/ImgSlider";
import MainInfo from "../containers/MainInfoHouse/MainInfo";
import Fullinfo from "../containers/HousePageFullInfo/HousePageFullInfo";
import Grid4 from "../containers/global_components/Grid4/Grid4";

export default function HousePage({ match }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://rent-project.herokuapp.com/homes/${match.params.id}`)
      .then((res) => {
        const info = res.data;
        setData(info);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [match.params.id]);

  return (
    <>
      <Header />
      <ImgSlider img={data.img} loading={loading} />
      <MainInfo
        lloji={data.lloji}
        sip={data.sip}
        dhoma={data.nr_dhomash}
        mobiluar={data.mobiluar}
        nr_personash={data.nr_personash}
        cmimi={data.cmimi}
        loading={loading}
      />
      <Fullinfo
        descrption={data.description}
        location={data.location}
        features={data.perfshihen}
        kati={data.kati}
        nrbanjosh={data.nr_banjosh}
        parkim={data.parkim}
        kondicioner={data.kondicioner}
        ashensor={data.ashensor}
        kafshe={data.kafshe}
        ballkon={data.ballkon}
        sendeGatimi={data.sendeGatimi}
        tv={data.televizor}
        dhoma={data.nr_dhomash}
        loading={loading}
      />
      <h1
        style={{ fontSize: "49px", textAlign: "center", marginBottom: "72px" }}
      >
        Similar Houses
      </h1>
      <div style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>
        <Grid4 />
        <button
          style={{
            width: "208px",
            height: "62px",
            background: "#FF9A00",
            boxShadow: "5px 3px 10px #00000029",
            fontSize: "28px",
            color: "white",
            borderRadius: "15px",
            marginLeft: "43%",
            marginBottom: "140px",
            marginTop: "-20px",
          }}
        >
          More
        </button>
      </div>
    </>
  );
}
