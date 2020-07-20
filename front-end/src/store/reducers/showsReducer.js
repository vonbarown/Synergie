import {
  LOAD_USER_SHOWS,
  LOAD_SHOWS,
  LOAD_COMMENTS,
  SEARCH_SHOW_RESULT,
  SEARCH_SHOW_TERM,
} from "../actions/actionTypes";

const initialState = {
  shows: [],
  comments: [],
  showObj: {},
  search: "",
  searchResult: {},
};

export default (state = initialState, action) => {
  let stateCopy = { ...state };

  switch (action.type) {
    case LOAD_SHOWS:
      stateCopy.showObj = action.payload;
      break;
    case LOAD_USER_SHOWS:
      stateCopy.shows = action.payload;
      break;
    case LOAD_COMMENTS:
      stateCopy.comments = action.payload;
      break;
    case SEARCH_SHOW_RESULT:
      stateCopy.searchResult = action.result;
      break;
    case SEARCH_SHOW_TERM:
      stateCopy.search = action.search;
      break;
    default:
      break;
  }
  return stateCopy;
};
