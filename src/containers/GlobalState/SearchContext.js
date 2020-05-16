import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    axios
      .get("https://rent-project.herokuapp.com/homes/")
      .then((res) => {
        setSearchData(res.data);
        setLoading(false);
        console.log(res);
      })
      .catch((err) => {
        setError(true);
        console.log(err);
      });
  }, []);
  return (
    <SearchContext.Provider
      value={{
        data: [searchData, setSearchData],
        loading: [loading, setLoading],
        file: [error, setError],
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
