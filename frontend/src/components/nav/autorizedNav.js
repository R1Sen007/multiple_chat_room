import React from 'react';
import { useContext } from 'react';

import { UserContext } from '../../contexts'


function AutorizedNav({onLogOut}) {
    const userContext = useContext(UserContext)

    return (
        <nav>
            <p>name: {userContext.username}</p>
            <button className='btn btn-primary' onClick={onLogOut}>Log Out</button>
        </nav>
    )
}

export default AutorizedNav