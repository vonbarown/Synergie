import { SEND_MESSAGE, LOAD_MESSAGE } from '../actions/actionTypes';

const initialState = {
    history: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case LOAD_MESSAGE:
            stateCopy.history = action.payload
            break
        default:
            break
    }
    return stateCopy;
};