import { combineReducers } from "redux";
import userReducer from "./users/reducer";


export const rootReducer = combineReducers({userReducer})        