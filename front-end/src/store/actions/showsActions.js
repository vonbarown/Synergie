import { LOAD_SHOWS } from './actionTypes';

export const fetchShows = (payload) => {
    return {
        type: LOAD_SHOWS,
        payload
    };
};

