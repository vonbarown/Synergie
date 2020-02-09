import { LOAD_SHOWS } from './actionTypes';

export const loadShows = (payload) => {
    return {
        type: LOAD_SHOWS,
        payload
    };
};

