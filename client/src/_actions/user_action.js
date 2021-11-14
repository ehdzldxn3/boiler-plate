import axios from "axios";
import {
    LOGIN_USER, USER_SIGNUP,
} from './types'


export function loginUser(dataToSubmit) {
    const req = axios.post('/api/user/login', dataToSubmit)
        .then(res =>  res.data)
    return {
        type : LOGIN_USER,
        payload : req
    }
}


export function signUp(dataToSubmit) {
    const req = axios.post('/api/user/signUp', dataToSubmit)
        .then(res =>  res.data)
    return {
        type : USER_SIGNUP,
        payload : req
    }
}