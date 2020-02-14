import usersReducer from './usersReducer'
import showsReducer from './showsReducer'
import chatReducer from './chatReducer'

import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        usersReducer,
        showsReducer,
        chatReducer
    }
);