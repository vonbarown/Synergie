import { SEND_MESSAGE, LOAD_MESSAGE, LOAD_CHAT_CHANNELS } from '../actions/actionTypes';

const initialState = {
    history: [],
    chats: []
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case LOAD_MESSAGE:
            stateCopy.history = action.payload
            break
        case LOAD_CHAT_CHANNELS:
            stateCopy.chats = action.payload
            break
        default:
            break
    }
    return stateCopy;
};