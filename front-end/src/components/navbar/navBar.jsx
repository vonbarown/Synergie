import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'><h2>TV Watch List App</h2></Link>
            </div>
            <div className='links'>
                <Link to='/users'>Users</Link>{" "}
                <Link to='/shows'>Shows</Link>{' '}
                <Link to='/about'>About</Link>
            </div>
        </div>
    )
}