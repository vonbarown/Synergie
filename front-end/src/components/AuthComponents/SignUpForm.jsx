import React from 'react';

const SignupForm = ({ username, password, handleChange, signupUser, avatar_url }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        signupUser()
    }

    return (
        <div>
            <h2> Sign-Up </h2>
            <form onSubmit={handleSubmit} className='form-container'>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                    className='form-input'
                />
                <input
                    type="text"
                    name="avatar_url"
                    value={avatar_url}
                    placeholder="Url"
                    onChange={handleChange}
                    className='form-input'
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="******"
                    onChange={handleChange}
                    className='form-input'
                />
                <input type="submit" value="Signup" className='signup-button form-button' />
            </form>
        </div>
    )
}

export default SignupForm;