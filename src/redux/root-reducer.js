import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import CartReducer from './cart/reducer'

export const rootReducer = combineReducers({userReducer, CartReducer})        