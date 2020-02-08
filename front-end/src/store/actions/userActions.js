import { RECEIVE_USERS } from './actionTypes';

export const fetchUser = (payload) => {
    return {
        type: RECEIVE_USERS,
        payload
    };
};