import React from "react";

import ComingSoon from "../containers/ComingSoon/ComingSoon";

export default function PremiumHouses() {
  // const [houses, setHouses] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/premiumhomes")
  //     .then((res) => {
  //       const info = res.data;
  //       setHouses(info);
  //       console.log(info);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);
  return <ComingSoon name="Premium" />;
}
