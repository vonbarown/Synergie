import React from "react";
import "./card.scss";
import "../styles.css";
const ratingsColors = (color) => {
  switch (color) {
    case "R":
      return "red";
    case "PG":
      return "yellow";
    case "PG-13":
      return "purple";
    case "TV-Y":
      return "green";
    case "TV-Y7":
      return "light-green";
    case "Not Rated":
      return "black";
    default:
      return "light-pink";
  }
};

const Front = (props) => {
  return (
    <div className="front">
      <ImageArea result={props.result} />
      <MainArea result={props.result} />
    </div>
  );
};

const ImageArea = (props) => {
  console.log(props.result);

  return (
    <div className="image-container">
      <p id="search-title">{props.result.Title}</p>
      <p
        className="rating"
        style={{
          backgroundColor: ratingsColors(props.result.Rated),
        }}
      >
        {props.result.Rated}
      </p>
      <img
        className="card-image"
        src={props.result.Poster}
        alt={props.result.Title + " poster"}
      ></img>
    </div>
  );
};

const MainArea = (props) => {
  return (
    <div className="main-area">
      <div className="blog-post">
        <div className="blog-content">
          <p>Languages: {props.result.Language}</p>
          <p>Production: {props.result.Production}</p>
          <p>Released: {props.result.Released}</p>
          <p className="read-more">Hover to read more...</p>
        </div>
      </div>
    </div>
  );
};

export default Front;
