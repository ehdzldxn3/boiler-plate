import React, {useEffect, } from 'react'
<<<<<<< HEAD
import { Button, } from '@material-ui/core';


=======
import axios from 'axios'
import { withRouter } from 'react-router-dom'
>>>>>>> kang


<<<<<<< HEAD
    

    return (
        <div>
            

            LandingPage
=======
 function LandingPage(props) {

    const onClickHandler = () => {
        axios.get('/api/user/logout')
        .then(response => {
            if(response.data.success){
                props.history.push('/login')
            } else {
                alert('로그아웃 실패')
            }
            
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height:'100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>


>>>>>>> kang
        </div>
        
    )
}

export default withRouter(LandingPage)

 
