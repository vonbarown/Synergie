import React from "react";
import "./backdrop/backdrop.css";

export const DrawerToggleButton = ({ click }) => {
  return (
    <button className="toggle-button" onClick={click}>
      <div className="toggler-line" />
      <div className="toggler-line" />
      <div className="toggler-line" />
    </button>
  );
};
