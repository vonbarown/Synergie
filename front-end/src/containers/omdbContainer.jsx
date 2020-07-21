import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { searchShow, searchTem } from "../store/actions/showsActions";
import SearchTerm from "../components/OMDB/omdbComponent";
import SearchResults from "../components/OMDB/SearchResults";
import Modal from "../components/Modal/modal";

const OMDBSearch = (props) => {
  console.log(props.search);
  const loadSearchData = async () => {
    try {
      if (props.search !== "") {
        const { data } = await axios.get(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${props.search}`
        );
        props.searchShow(data);
      } else {
        window.alert("Please enter a show to search");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SearchTerm />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadSearchData();
          props.searchTem("");
        }}
      >
        <button>Submit</button>
      </form>
      {Object.keys(props.searchResult).length ? (
        <Modal show={true} onClose={props.onClose}>
          <SearchResults />
        </Modal>
      ) : null}
    </div>
  );
};

const mapStateToProps = ({ showsReducer: { search, searchResult } }) => {
  return {
    search: search,
    searchResult: searchResult,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchShow: (data) => dispatch(searchShow(data)),
    searchTem: (data) => dispatch(searchTem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OMDBSearch);
