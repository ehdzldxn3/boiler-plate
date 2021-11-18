import axios from "axios";
import {
    LOGIN_USER, SIGNUP_USER, AUTH_USER,
} from './types'


export function loginUser(dataToSubmit) {
    const req = axios.post('/api/user/login', dataToSubmit)
        .then(res =>  res.data)
        console.log('액션')
        console.log(req)
        console.log(LOGIN_USER)
    return {
        type : LOGIN_USER,
        res : req
    }
}


export function signUp(dataToSubmit) {
    const req = axios.post('/api/user/signUp', dataToSubmit)
        .then(res =>  res.data)
        console.log('액션')
        console.log(req)
        console.log(SIGNUP_USER)
    return {
        type : SIGNUP_USER,
        res : req
    }    
}

export function auth() {
    const req =  axios.get('/api/user/auth')
        .then(response => response.data);
        console.log('액션')
        console.log(req)
        console.log(AUTH_USER)
        return {
            type: AUTH_USER,
            res: req
        }
}