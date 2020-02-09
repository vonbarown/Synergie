import { LOAD_USER_SHOWS, LOAD_SHOWS } from '../actions/actionTypes';

const initialState = {
    shows: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case LOAD_SHOWS:
            stateCopy.shows = action.payload
            break
        case LOAD_USER_SHOWS:
            stateCopy.shows = action.payload
            break
        default:
            break
    }
    return stateCopy;
};