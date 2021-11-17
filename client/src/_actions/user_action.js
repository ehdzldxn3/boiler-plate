import axios from "axios";
import {
    LOGIN_USER, USER_SIGNUP, USER_AUTH,
} from './types'


export function loginUser(dataToSubmit) {
    const req = axios.post('/api/user/login', dataToSubmit)
        .then(res =>  res.data)
    return {
        type : LOGIN_USER,
        res : req
    }
}


export function signUp(dataToSubmit) {
    const req = axios.post('/api/user/signUp', dataToSubmit)
        .then(res =>  res.data)
    return {
        type : USER_SIGNUP,
        res : req
    }    
}

export function auth() {
    const req = axios.get('/api/user/auth')
                .then(res => res.data)
            return{
                type : USER_AUTH,
                res : req
            }
}