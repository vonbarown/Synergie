import React from 'react'
import { Link } from 'react-router-dom'

export const Profile = () => {
    return (
        <div>
            Profile
            <Link to='/chat'>
                <button>Chat</button>
            </Link>
        </div>
    )
}