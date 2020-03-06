import {
    RECEIVE_USERS,
    LOAD_USER,
    LOGIN_USER,
    LOG_OUT,
    UPDATE_PROFILE,
    SCROLLING,
    SET_HAMBURGER
} from './actionTypes';

export const fetchUsers = (payload) => {
    return {
        type: RECEIVE_USERS,
        payload
    };
};

export const loadUser = (payload) => {
    return {
        type: LOAD_USER,
        payload
    };
};

export const setUser = (payload) => {
    return {
        type: LOGIN_USER,
        payload
    }
}

export const logOut = (payload) => {
    return {
        type: LOG_OUT,
        payload
    }
}
export const scrolling = (payload) => {
    return {
        type: SCROLLING,
        payload
    }
}

export const updateProfile = () => {
    return {
        type: UPDATE_PROFILE
    }
}

export const setHamburger = (payload) => {
    return {
        type: SET_HAMBURGER,
        payload
    }
}