import usersReducer from './usersReducer'
import showsReducer from './showsReducer'

import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        usersReducer,
        showsReducer
    }
);