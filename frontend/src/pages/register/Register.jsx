import React from 'react';
import './register.css'

import { useContext } from 'react';
import {Navigate} from 'react-router-dom'

import { useForm } from '../../utils'
import { AuthContext } from '../../contexts'


const Register = ({ onRegister }) => {
    const { values, handleChange, setValues } = useForm()
    const authContext = useContext(AuthContext)

    return (
        <section id="register">
            {authContext && <Navigate path='/login'/>}
            <h2>Register</h2>
            <div className="container register__container">
                <form onSubmit={e => {
                    e.preventDefault()
                    onRegister(values)
                    }}
                >
                    <input type="username" name='username' placeholder='Enter your username' onChange={handleChange} />
                    <input type="password" name='password' placeholder='Enter your password' onChange={handleChange}/>
                    <button type='submit' className='btn btn-primary' onChange={handleChange}> Register </button>
                </form>
            </div>
        </section>
    )
}

export default Register