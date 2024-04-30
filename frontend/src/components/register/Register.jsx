import React from 'react';
import './register.css'


const Register = () => {
    return (
        <section id="register">
            <h2>Register</h2>
            <div className="container register__container">
                <form action="">
                    <input type="email" name='username' placeholder='Enter your username' />
                    <input type="password" name='password' placeholder='Enter your password'/>
                    <button type='submit' className='btn btn-primary'>Register</button>
                </form>
            </div>
        </section>
    )
}

export default Register