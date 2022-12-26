import { UserActionTypes } from "./action-types";


export const  userLogin = (payload) => ({
   type: UserActionTypes.LOGIN_LOUGOUT, 
   payload
})