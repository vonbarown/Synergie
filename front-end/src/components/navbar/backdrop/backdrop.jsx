import React from "react";
import "./backdrop.css";
export const Backdrop = ({ clicked }) => {
  return <div className="backdrop" onClick={clicked} />;
};
