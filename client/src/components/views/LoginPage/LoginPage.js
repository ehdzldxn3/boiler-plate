import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../_actions/user_action'

export default function LoginPage(props) {

    const dispatch = useDispatch()
    
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)            
    }

    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }

    const onSubmitHandler = (e) => {
        //onSubmit 새로고침 막는 이벤트
        e.preventDefault();
        //서버에 보낼 데이터
        let body = {
            email : Email,
            password : Password
        }
        //액션
        
        dispatch(loginUser(body))
            .then(response => {
                if( response.payload.loginSuccess ){
                    props.history.push('/')
                } else {
                    console.log('에러')
                }
            })

    }


    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height:'100vh'
        }}>
            <form style={{display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="text" value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

 
