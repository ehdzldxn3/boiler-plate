import React, {useEffect, } from 'react';
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'



export default function(SpecificComponnet, option, adminRoute = null) {

    function AuthenticationCheck(props) {
        
        const disfatch = useDispatch();

        useEffect(() => {
            disfatch(auth()).then(res=> {
                console.log(res)
            })

        }, [])
        return (
            <SpecificComponnet/>
        )
    }


    return AuthenticationCheck
}