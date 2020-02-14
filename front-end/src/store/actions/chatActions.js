import { SEND_MESSAGE } from './actionTypes';

export const sendMessage = (payload) => {
    return {
        type: SEND_MESSAGE,
        payload
    };
};