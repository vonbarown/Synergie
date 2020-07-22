import React from "react";
import { connect } from "react-redux";
// import { searchTem } from "../../store/actions/showsActions";
import "./styles.css";

const SearchResults = (props) => {
  let result = props.result;
  console.log("resvb", result);
  return (
    <div className="search-results">
      <h1>{result.Title}</h1>
      <img src={result.Poster} alt={result.Poster} />
      <div id="plot">{result.Plot}</div>
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { searchResult } }) => {
  return {
    result: searchResult,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
