import { SEND_MESSAGE, LOAD_MESSAGE, FETCH_SOCKET } from './actionTypes';

export const sendMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    };
};

export const loadChatMessages = (payload) => {
    return {
        type: LOAD_MESSAGE,
        payload
    };
};

export const fetchSocket = (payload) => {
    return {
        type: FETCH_SOCKET,
        payload
    };
};