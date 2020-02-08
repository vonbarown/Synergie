import { RECEIVE_USERS } from '../actions/actionTypes';

const initialState = {
    users: [],
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_USERS:
            stateCopy.users = action.payload
            break
        default:
            break
    }
    return stateCopy;
};