import React from "react";
import "./card.scss";

const Back = (props) => {
  return (
    <div className="back">
      <p>{props.result.Plot}</p>
    </div>
  );
};

export default Back;
