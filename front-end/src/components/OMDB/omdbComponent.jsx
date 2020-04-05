import React from "react";
import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import { searchShow } from "../../store/actions/showsActions";

const OMDBSearch = (props) => {
  const [search, setSearch] = useState("");

  const loadSearchData = async () => {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${search}`
    );
    console.log(data);

    props.searchShow(data);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loadSearchData();
        }}
      >
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </form>
      movies
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchShow: (data) => dispatch(searchShow(data)),
  };
};

export default connect(null, mapDispatchToProps)(OMDBSearch);
