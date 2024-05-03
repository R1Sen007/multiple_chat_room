import React from 'react';
import './header.css'

import { AutorizedNav, NotAutorizedNav } from '../../components';


const Header = ({loggedIn, onLogOut}) => {
    return (
        loggedIn ? <AutorizedNav onLogOut={onLogOut}/> : <NotAutorizedNav/>
    )
}

export default Header