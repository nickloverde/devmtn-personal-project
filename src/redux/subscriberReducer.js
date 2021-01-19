//Initialize state
const initialState = {
    first_name: '',
    isLoggedIn: false
}

//action constants
const LOGIN_SUBSCRIBER = 'LOGIN_SUBSCRIBER'
const LOGOUT = 'LOGOUT'

//action creators
export function loginSubscriber(first_name){
    return {
        type: LOGIN_SUBSCRIBER,
        payload: first_name,
    }
}

export function logout(){
    return {
        type: LOGOUT,
    }
}

//reducer function
export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_SUBSCRIBER:
            return {...state, first_name: action.payload, isLoggedIn: true}
        case LOGOUT:
            return initialState
        default:
            return state
    }

}