import {
  LOAD_USER_SHOWS,
  LOAD_SHOWS,
  LOAD_COMMENTS,
  SEARCH_SHOW_RESULT,
  SEARCH_SHOW_TERM,
} from "./actionTypes";

export const loadUserShows = (payload) => {
  return {
    type: LOAD_USER_SHOWS,
    payload,
  };
};

export const loadAllShows = (payload) => {
  return {
    type: LOAD_SHOWS,
    payload,
  };
};

export const loadComments = (payload) => {
  return {
    type: LOAD_COMMENTS,
    payload,
  };
};

export const searchShow = (result) => {
  return {
    type: SEARCH_SHOW_RESULT,
    result,
  };
};

export const searchTem = (search) => {
  return {
    type: SEARCH_SHOW_TERM,
    search,
  };
};
