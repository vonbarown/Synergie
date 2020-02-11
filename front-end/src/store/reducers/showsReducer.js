import { LOAD_USER_SHOWS, LOAD_SHOWS, LOAD_COMMENTS } from '../actions/actionTypes';

const initialState = {
    shows: [],
    comments: [],
    showObj: {}
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
                let key = stateCopy.shows[i].img_url
                if (!watchList[key]) {
                    watchList[key] = []
                    watchList[key].push(stateCopy.shows[i].title, stateCopy.shows[i].username)

                } else {
                    watchList[key].push(stateCopy.shows[i].username)
                }

                // if (!dupes[key]) {
                //     filteredShows.push(stateCopy.shows[i])
                // }
                // dupes[key] = true
            }
            stateCopy.showObj = watchList

            for (let elem in stateCopy.showObj) {
                filteredShows.push(stateCopy.showObj[elem])
            }
            console.log('filtered', filteredShows);


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