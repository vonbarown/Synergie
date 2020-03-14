import React, { useEffect, useRef } from 'react';
import './authForms.css'

const LoginForm = ({ username, password, handleChange, loginUser }) => {

    const usernameInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        loginUser()
    }

    useEffect(() => {
        usernameInput.current.focus()
    })

    return (
        <div>
            <h2> Log-In </h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input
                    ref={usernameInput}
                    type="text"
                    name="username"
                    value={username}
                    placeholder="username"
                    onChange={handleChange}
                    className='form-input'
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="*******"
                    onChange={handleChange}
                    className='form-input'
                />
                <input type="submit" value="log-in" className='login-button form-button' />
            </form>
        </div>
    )
}

export default LoginForm;