import { 
    LOGIN_USER, SIGNUP_USER, AUTH_USER,
 } from "../_actions/types";

export default function (state={}, action) {

    switch (action.type) {
        case LOGIN_USER:
            console.log('리듀서')
            console.log(action.res)
            return {...state, loginSuccess : action.res}
            break;

        case SIGNUP_USER : 
            return {...state, signup : action.res}            
            break;
            
        case AUTH_USER :
            console.log('리듀서')
            console.log(action.res)
            return {...state, userData: action.res}      
            break;

        default:
            return state;
    }
} 

