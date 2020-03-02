import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = ({ logoutUser, isUserLoggedIn }) => {

    if (isUserLoggedIn) {
        return (
            <nav className='logged-in'>
                <Link to="/">
                    <div className='logo'>
                        <h2>Synergie</h2>
                    </div>
                </Link>{" "}
                <Link className='navbar-links' to='/users'>Users</Link>
                <Link className='navbar-links' to='/shows'>Shows</Link>{' '}
                <Link className='navbar-links' to='/addShow'>Add Show</Link>{' '}
                <Link className='navbar-links' to='/about'>About</Link>{' '}
                <Link className='navbar-links' to='/profile'>Profile</Link>{' '}
                <button className='log-out' onClick={logoutUser}>log-out</button>
            </nav>

        )
    } else {
        return (
            <nav className='not-logged-in'>
                <Link to="/">
                    <div className='logo'>
                        <h2>Synergie</h2>
                    </div>
                </Link>{" "}
                <Link  className='navbar-links' to='/about'>About</Link>{' '}
                <Link  className='navbar-links' to='login'>Log-In</Link>{' '}
                <Link  className='navbar-links' to='/signup'>Sign-Up</Link>{' '}
            </nav>
        )
    }
}