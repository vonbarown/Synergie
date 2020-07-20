import React from "react";
import { connect } from "react-redux";
import { searchTem } from "../../store/actions/showsActions";

const SearchResults = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.searchTem(e.target.value)} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchTem: (data) => dispatch(searchTem(data)),
  };
};

export default connect(null, mapDispatchToProps)(SearchResults);
