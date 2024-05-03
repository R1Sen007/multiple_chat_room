import React from 'react';
import './login.css'

import { useContext } from 'react';
import {Navigate} from 'react-router-dom'

import { useForm } from '../../utils'
import { AuthContext } from '../../contexts'


const Login = ({ onLogin }) => {
    const { values, handleChange, setValues } = useForm()
    const authContext = useContext(AuthContext)

    return (
        <section id="login">
            {authContext && <Navigate to='/chats' replace/>}
            <h2>Login</h2>
            <div className="container login__container">
                <form onSubmit={e => {
                    e.preventDefault()
                    onLogin(values)
                    }}
                >
                    <input type="username" name='username' placeholder='Enter your username' onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter your password' onChange={handleChange} />
                    <button type='submit' className='btn btn-primary' onChange={handleChange}> Log In </button>
                </form>
            </div>
        </section>
    )
}

export default Login