import React from 'react';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function NotAutorizedNav() {
    const navigate = useNavigate();
    const [isRegister, setIsRegister] = useState(false)

    const routeChange = () =>{ 
        let path = isRegister ? `/login`: `/register`; 

        navigate(path, {replace: true});
      }

    useEffect(()=>{
        setIsRegister(window.location.href.indexOf('/register') !== -1)
    })

    return (
        <nav>
            <p>Unauthorized user</p>
            <button onClick={routeChange} className="btn btn-primary">{isRegister ? `LogIn`: `Register`}</button>
        </nav>
    )
}

export default NotAutorizedNav