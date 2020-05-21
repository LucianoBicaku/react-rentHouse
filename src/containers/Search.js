import { usesState, useContext } from "react";
import { SearchContext } from "./GlobalState/SearchContext";
import axios from "axios";
// const { data } = useContext(SearchContext);
export function Search(min, max, l, r, nrRoomates, page) {
  //   const [homes, setHomes] = data;
  if (min == null) min = 0;
  if (max == null) max = 2000000;
  axios
    .get(`https://rent-project.herokuapp.com/searchHomes/${page}`, {
      params: {
        cmimiMax: max,
        cmimiMin: min,
        rruga: l,
        nrdhoma: r,
        nrpersona: nrRoomates,
      },
    })
    .then((response) => {
      //   setHomes(response.data);
      console.log(response.data);
    })

    .catch(function (error) {
      console.log(error);
    });
}
