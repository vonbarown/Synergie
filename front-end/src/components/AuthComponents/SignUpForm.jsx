import React from 'react';

const SignupForm = ({ username, password, handleChange, signupUser, avatar_url }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        signupUser()
    }

    return (
        <div>
            <h2> Sign-Up </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="img_url"
                    value={avatar_url}
                    placeholder="Url"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="******"
                    onChange={handleChange}
                />
                <input type="submit" value="Signup" />
            </form>
        </div>
    )
}

export default SignupForm;