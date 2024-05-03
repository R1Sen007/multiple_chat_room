import React from 'react';

import { useContext } from 'react';

import { UserContext } from '../../contexts'



function AutorizedNav({onLogOut}) {
    const userContext = useContext(UserContext)

    // console.log(userContext.username)
    return (
        <nav>
            {/* <a href="#" className="btn btn-primary">Create Chat</a>
            <a href="#" className="btn btn-primary">Join Chat</a> */}
            <p>name: {userContext.username}</p>
            <a className='btn btn-primary' onClick={onLogOut}>Log Out</a>
        </nav>
    )
}

export default AutorizedNav