import { SEND_MESSAGE, LOAD_MESSAGE, LOAD_CHAT_CHANNELS } from './actionTypes';

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

export const loadChat = (payload) => {
    return {
        type: LOAD_CHAT_CHANNELS,
        payload
    };
};