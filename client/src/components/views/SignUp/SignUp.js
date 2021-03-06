import React, { useState, } from 'react'
import { useDispatch } from 'react-redux'
import {  signUp } from '../../../_actions/user_action'

export default function RegisterPage(props) {

    const dispatch = useDispatch()
    
    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    
    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)            
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }


    const onSubmitHandler = (e) => {
        //onSubmit 새로고침 막는 이벤트
        e.preventDefault();

        if(Password !== ConfirmPassword ) {
            alert('비밀번호가 다릅니다.')
        }
        //서버에 보낼 데이터
        let body = {
            email : Email,
            name : Name,
            password : Password,
        }
        
        dispatch(signUp(body))
            .then(response => {
                if( response.payload.success ){
                    props.history.push('/login')
                } else {
                    alert('에러')
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
                <input type="email" value={Email} onChange={onEmailHandler}/>
                
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler}/>
                
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler}/>

                <br/>
                <button>Login</button>
            </form>
        </div>
    )
}

 
