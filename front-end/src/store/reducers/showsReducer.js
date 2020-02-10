import { LOAD_USER_SHOWS, LOAD_SHOWS, LOAD_COMMENTS } from '../actions/actionTypes';

const initialState = {
    shows: [],
    comments: []
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
        case LOAD_COMMENTS:
            stateCopy.comments = action.payload
            break
        default:
            break
    }
    return stateCopy;
};