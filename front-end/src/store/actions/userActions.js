import { RECEIVE_USERS, LOAD_USER, LOGGED_USER } from './actionTypes';

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
export const loggedInUser = (payload) => {
    return {
        type: LOGGED_USER,
        payload
    };
};