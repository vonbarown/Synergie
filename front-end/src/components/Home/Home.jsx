import React from "react";
import "./home.css";
import logo from "../../logo/07f3beb4-475b-4f38-b462-0d2dae119fd2_200x200.png";

export const Home = () => {
  return (
    <div className="home">
      <div className="home-metadata">
        <h1 className="banner App-header">
          <img className="home-logo App-logo" src={logo} alt="logo" />
          Welcome to Synergie
        </h1>
        <h3>What are you binging?</h3>
      </div>
    </div>
  );
};
