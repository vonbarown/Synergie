import {
    RECEIVE_USERS,
    LOAD_USER,
    LOGIN_USER,
    LOG_OUT,
    SCROLLING,
    SET_HAMBURGER
} from '../actions/actionTypes';

const initialState = {
    users: [],
    selectedUser: {},
    loggedUser: {
        user: null,
        isUserLoggedIn: false
    },
    scrolling: {
        prevScrollPos: window.pageYOffset,
        visible: false
    },
    hamburgerOpen: false
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_USERS:
            stateCopy.users = action.payload
            break
        case LOAD_USER:
            stateCopy.selectedUser = action.payload
            break
        case LOGIN_USER:
            let user = action.payload

            user.name = user.username
            user.photoUrl = user.avatar_url
            user.role = 'Member'

            stateCopy.loggedUser = {
                user: action.payload,
                isUserLoggedIn: true
            }
            break
        case LOG_OUT:
            stateCopy.loggedUser = {
                user: action.payload,
                isUserLoggedIn: false
            }
            break
        case SCROLLING:
            stateCopy.scrolling = {
                prevScrollPos: action.payload,
                visible: stateCopy.scrolling.prevScrollPos < action.payload
            }
            break
        case SET_HAMBURGER:
            stateCopy.hamburgerOpen = action.payload
            break
        default:
            break
    }
    return stateCopy;
};