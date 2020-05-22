import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setError(false);
    axios
      .get(`https://rent-project.herokuapp.com/searchHomes/${1}`, {
        params: {
          cmimiMax: 20000000,
          cmimiMin: 0,
          rruga: "",
          nrdhoma: 0,
          nrpersona: 0,
        },
      })
      .then((response) => {
        setLoading(false);
        setSearchData(response.data);
        console.log(response.data);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <SearchContext.Provider
      value={{
        data: [searchData, setSearchData],
        loading: [loading, setLoading],
        file: [error, setError],
        pagenr: [page, setPage],
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
