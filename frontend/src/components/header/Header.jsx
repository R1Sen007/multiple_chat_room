import React from 'react';
import './header.css'


const Header = () => {
    return (
        <nav>
            {/* -------authorized------ */}
            {/* <a href="#" className="btn btn-primary">Create Chat</a>
            <a href="#" className="btn btn-primary">Join Chat</a>
            <p>name</p> */}

            {/* -------NOT authorized------ */}
            <p>Unauthorized user</p>
            <a href="#" className="btn btn-primary">Register</a>
        </nav>
    )
}

export default Header