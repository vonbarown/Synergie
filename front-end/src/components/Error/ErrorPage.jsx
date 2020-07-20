import React from "react";
import "./errorStyling.css";
import error from "../../assets/fogg-page-not-found.png";

export const ErrorPage = () => {
  return (
    <div className="error-page">
      <img className="not-found" src={error} alt="page not found" />
      <p id="not-found-warning">Oops! Something went wrong</p>
    </div>
  );
};
