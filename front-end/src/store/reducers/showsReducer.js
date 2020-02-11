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
            const dupes = {};
            const filteredShows = [];
            let watchList = {}

            for (let i = 0; i < stateCopy.shows.length; i++) {
                let key = stateCopy.shows[i].title
                if (!watchList[key]) {
                    watchList[key] = []
                } else {
                    watchList[key].push(stateCopy.shows[i].user_id)
                }

                // if (!dupes[key]) {
                //     filteredShows.push(stateCopy.shows[i])
                // }
                dupes[key] = true
            }
            console.log('watchList', watchList);

            stateCopy.shows = filteredShows

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