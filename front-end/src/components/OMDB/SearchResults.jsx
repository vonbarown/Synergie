import React from "react";
import { connect } from "react-redux";
import "./styles.css";
import BlogCard from "./searchCard/card";

const SearchResults = (props) => {
  let result = props.result;
  console.log("resvb", result);
  return (
    <div className="search-results">
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
