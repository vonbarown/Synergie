import { LOAD_USER_SHOWS } from './actionTypes';

export const loadUserShows = (payload) => {
    return {
        type: LOAD_USER_SHOWS,
        payload
    };
};

