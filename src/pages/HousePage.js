import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../containers/global_components/Header/DarkHeader";
import ImgSlider from "../containers/Img-slider-housePage/ImgSlider";
import MainInfo from "../containers/MainInfoHouse/MainInfo";
import Fullinfo from "../containers/HousePageFullInfo/HousePageFullInfo";
import Grid4 from "../containers/global_components/Grid4/Grid4";
import Footer from "../containers/global_components/Footer/Footer";
export default function HousePage({ match }) {
  const [data, setData] = useState([]);
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
        type={data.type}
        area={data.area}
        rooms={data.rooms}
        furnished={data.furnished}
        tenants={data.tenants}
        price={data.price}
        loading={loading}
      />
      <Fullinfo
        descrption={data.description}
        location={data.location}
        features={data.perfshihen}
        floor={data.floor}
        bathrooms={data.bathrooms}
        parking={data.parking}
        air_conditioner={data.air_conditioner}
        elevator={data.elevator}
        animals={data.animals}
        balcony={data.balcony}
        kitchenware={data.kitchenware}
        tv={data.tv}
        rooms={data.rooms}
        loading={loading}
        tolalFloors={data.tolalFloors}
        bedrooms={data.bedrooms}
        wifi={data.wifi}
        water={data.water}
        electricity={data.electricity}
        enternet={data.internet}
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
      <Footer />
    </>
  );
}
