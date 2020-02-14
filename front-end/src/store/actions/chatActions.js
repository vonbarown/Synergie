import { SEND_MESSAGE, LOAD_MESSAGE, } from './actionTypes';

export const sendMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    };
};

export const loadChat = (payload) => {
    console.log('payload', payload);

    return {
        type: LOAD_MESSAGE,
        payload
    };
};