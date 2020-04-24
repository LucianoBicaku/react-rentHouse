import React from "react";
import ComingSoon from "../containers/ComingSoon/ComingSoon";

export default function Home() {
  // const [houses, setHouses] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/homes/")
  //     .then((res) => {
  //       const info = res.data;
  //       setHouses(info);
  //       console.log(info);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return <ComingSoon name="Houses" />;
}
