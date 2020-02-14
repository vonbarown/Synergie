import { SEND_MESSAGE } from '../actions/actionTypes';

const initialState = {
    history: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case SEND_MESSAGE:
            stateCopy.history = [...stateCopy.history, action.payload]
            break
        default:
            break
    }
    return stateCopy;
};