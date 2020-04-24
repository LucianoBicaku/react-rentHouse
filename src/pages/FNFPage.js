import React from "react";
import Header from "../containers/global_components/Header/Header";
// import "../components/ErrorPage.css";
export default function FileNotFound() {
  return (
    <>
      <div className="error-page">
        <div className="navbar-dark">
          <Header userimagecolor='blue' />
        </div>

        <div className="error-page-content">
          <h1>404</h1>
          <p>File Not Found</p>
          <button>Go to Home Page</button>
        </div>
      </div>
    </>
  );
}
