import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = (props) => {
  const [searchData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState({ min: 0, max: 2000000 })

  useEffect(() => {
    setError(false);
    axios
      .get(`https://rent-project.herokuapp.com/searchHomes/${1}`, {
        params: {
          maxPrice: 2000000,
          minPrice: 0,
          street: "",
          rooms: 0,
          tenants: 0,
        },
      })
      .then((response) => {
        setLoading(false);
        setSearchData(response.data);
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
        price: [price, setPrice],
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};
