import React, {useEffect, } from 'react'
import axios from 'axios'

export default function LandingPage() {

    useEffect(() => {
        axios.get('http://localhost:5000/api/hello')      
        .then(res => console.log(res.data))  
    }, [])

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height:'100vh'
        }}>
            시작 페이지
        </div>
    )
}

 
