import React, { useState } from "react";
import "./card.scss";

const Back = (props) => {
  const [submit, setSubmit] = useState(false);
  const searchObj = {
    title: props.result.Title,
    img_url: props.result.Poster,
    user_id: props.loggedInUser.id,
    genre_id: 1,
  };
  return (
    <div className="back">
      <p>Description</p>
      <p>{props.result.Plot}</p>
      <p>Actors</p>
      <p>{props.result.Actors}</p>
      <p>Awards</p>
      <p>{props.result.Awards}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmit(true);
        }}
      >
        <button
          className={submit ? "submitted" : "un-submitted"}
          onClick={() => props.addShow(searchObj)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Back;
