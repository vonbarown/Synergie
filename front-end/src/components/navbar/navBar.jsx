import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = ({ logoutUser }) => {
    return (
        <div className='navbar'>

            <Link to='/'>
                <div className='logo'>
                    <h2>TV Watch List App</h2>
                </div>
            </Link>


            <div className='links'>
                <Link to='/users'>Users</Link>{" "}
                <Link to='/shows'>Shows</Link>{' '}
                <Link to='/about'>About</Link>{' '}
                <Link to='/addShow'>Add Show</Link>
                <Link to='/login'>Login</Link>
                <button onClick={logoutUser}>log-out</button>
            </div>
        </div>
    )
}