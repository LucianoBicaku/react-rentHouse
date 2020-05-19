import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../containers/global_components/Header/DarkHeader";
import ImgSlider from "../containers/Img-slider-housePage/ImgSlider";
import MainInfo from "../containers/MainInfoHouse/MainInfo";
import Fullinfo from "../containers/HousePageFullInfo/HousePageFullInfo";

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
        loading={loading}
      />
    </>
  );
}
