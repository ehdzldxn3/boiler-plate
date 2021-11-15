import { 
    LOGIN_USER, USER_SIGNUP,
 } from "../_actions/types";

export default function (state={}, action) {

    switch (action.type) {
        case LOGIN_USER:
            //로그인석세스라는 곳에 액션을 다 담아준다.
            return {...state, loginSuccess : action.res}
            break;

        case USER_SIGNUP : 
            return {...state, signup : action.res}            
            break;
            
        default:
            return state;
    }
} 

