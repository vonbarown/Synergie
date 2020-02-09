import { LOAD_USER_SHOWS, LOAD_SHOWS } from '../actions/actionTypes';

const initialState = {
    shows: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case LOAD_SHOWS:
            stateCopy.shows = action.payload
            const dupes = {};
            const filteredShows = [];

            for (let i = 0; i < stateCopy.shows.length; i++) {
                let key = stateCopy.shows[i].title
                if (!dupes[key]) {
                    filteredShows.push(stateCopy.shows[i])
                }
                dupes[key] = true
            }
            stateCopy.shows = filteredShows

            break
        case LOAD_USER_SHOWS:
            stateCopy.shows = action.payload

            // stateCopy.shows.filter(el => {
            //     return 
            // })
            break
        default:
            break
    }
    return stateCopy;
};