import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get("https://rent-project.herokuapp.com/homes/")
      .then((res) => {
        setSearchData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <SearchContext.Provider value={[searchData, setSearchData]}>
      {props.children}
    </SearchContext.Provider>
  );
};
