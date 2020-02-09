import { RECEIVE_USERS, LOAD_USER } from '../actions/actionTypes';

const initialState = {
    users: [],
    user: []
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_USERS:
            stateCopy.users = action.payload
            break
        case LOAD_USER:
            stateCopy.user = action.payload
            break
        default:
            break
    }
    return stateCopy;
};