import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import BlogCard from "./searchCard/card";

const SearchResults = (props) => {
  let result = props.result;
  console.log("resvb", result);
  return (
    <div className="search-results">
      {
        //   <p id="search-title">{result.Title}</p>
        //   <p
        //     className="rating"
        //     style={{
        //       backgroundColor: ratingsColors(result.Rated),
        //     }}
        //   >
        //     {result.Rated}
        //   </p>
        //   <img src={result.Poster} alt={result.Poster} />
        //   <div id="plot">{result.Plot}</div>
        //   <div id="search-meta-data">
        //     <p>{result.Language}</p>
        //     <p>{result.Production}</p>
        //     <p>{result.Year}</p>
        //   </div>
      }
      <BlogCard
        result={result}
        addShow={props.addShow}
        loggedInUser={props.loggedInUser}
      />
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { searchResult } }) => {
  return {
    result: searchResult,
  };
};

export default connect(mapStateToProps, null)(SearchResults);
