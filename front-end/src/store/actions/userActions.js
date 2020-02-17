import { RECEIVE_USERS, LOAD_USER, LOGIN_USER, LOGIN_OUT, UPDATE_PROFILE } from './actionTypes';

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
        type: LOGIN_OUT,
        payload
    }
}

export const updateProfile = () => {
    return {
        type: UPDATE_PROFILE
    }
}