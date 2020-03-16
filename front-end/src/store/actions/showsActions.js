import { LOAD_USER_SHOWS, LOAD_SHOWS, LOAD_COMMENTS, SEARCH_SHOW } from './actionTypes';

export const loadUserShows = (payload) => {
    return {
        type: LOAD_USER_SHOWS,
        payload
    };
};

export const loadAllShows = (payload) => {
    return {
        type: LOAD_SHOWS,
        payload
    };
};


export const loadComments = (payload) => {
    return {
        type: LOAD_COMMENTS,
        payload
    }
}

export const searchShow = (payload) => {
    return {
        type: SEARCH_SHOW,
        payload
    }
}