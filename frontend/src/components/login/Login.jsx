import React from 'react';
import './login.css'


const Login = () => {
    return (
        <section id="login">
            <h2>Login</h2>
            <div className="container login__container">
                <form action="">
                    <input type="email" name='username' placeholder='Enter your username' />
                    <input type="password" name='password' placeholder='Enter your password'/>
                    <button type='submit' className='btn btn-primary'>Log In</button>
                </form>
            </div>
        </section>
    )
}

export default Login