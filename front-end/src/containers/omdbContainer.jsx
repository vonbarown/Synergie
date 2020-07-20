import React from "react";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { searchShow, searchTem } from "../store/actions/showsActions";
import SearchResults from "../components/OMDB/omdbComponent";

const OMDBSearch = (props) => {
  console.log(props.search);
  const loadSearchData = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${props.search}`
    );
    console.log(data);

    props.searchShow(data);
  };

  return (
    <div>
      <SearchResults />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadSearchData();
          props.searchTem("");
        }}
      >
        <button>Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { search } }) => {
  return {
    search: search,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchShow: (data) => dispatch(searchShow(data)),
    searchTem: (data) => dispatch(searchTem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OMDBSearch);
