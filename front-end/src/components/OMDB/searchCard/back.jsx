import React from "react";
import "./card.scss";

const Back = (props) => {
  return (
    <div className="back">
      <p>{props.result.Plot}</p>
      <p>
        Bloggity bloggity bloggity blog. This would be the full text of the
        abbreviated blog post.
      </p>
    </div>
  );
};

export default Back;
