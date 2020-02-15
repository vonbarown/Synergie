import { LOAD_MESSAGE, FETCH_SOCKET } from '../actions/actionTypes';

const initialState = {
    history: [],
    chats: [],
    socket: null
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case LOAD_MESSAGE:
            stateCopy.history.push(action.payload)
            break
        case FETCH_SOCKET:
            stateCopy.socket = action.payload
            break
        default:
            break
    }
    return stateCopy;
};