import React from "react";
import Header from "./homepage components/Header";
import "./ErrorPage.css";
export default function ComingSoon(props) {
  console.log(props.name);
  return (
    <>
      <div className="error-page">
        <div className="navbar-dark">
          <Header />
        </div>

        <div className="error-page-content">
          <h1>{props.name} page</h1>
          <p>Comming Soon</p>
          <button>Go to Home Page</button>
        </div>
      </div>
    </>
  );
}
