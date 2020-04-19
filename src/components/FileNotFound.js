import React from "react";
import Header from "./homepage components/Header";
import "./ErrorPage.css";
export default function FileNotFound() {
  return (
    <>
      <div class="error-page">
        <div className="navbar-dark">
          <Header />
        </div>

        <div class="error-page-content">
          <h1>404</h1>
          <p>File Not Found</p>
          <button>Go to Home Page</button>
        </div>
      </div>
    </>
  );
}
