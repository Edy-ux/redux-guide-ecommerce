const initialState = {
    userIsLogged: null,

}

const userReducer = (state = initialState, action) => {
    
    if (action.type === 'user/login') {
        
        return {
            ...state,
            userIsLogged: action.payload.userIsLogged,
            payload: action.payload
        }
    }
    return state
}
export default userReducer;