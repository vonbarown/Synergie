import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export const Navbar = ({ logoutUser, isUserLoggedIn }) => {
    // return (
    //     <div className='navbar'>

    //         <Link to='/'>
    //             <div className='logo'>
    //                 <h2>Synergie</h2>
    //             </div>
    //         </Link>


    //         <div className='links'>
    //             <Link to='/users'>Users</Link>{" "}
    //             <Link to='/shows'>Shows</Link>{' '}
    //             <Link to='/about'>About</Link>{' '}
    //             <Link to='/addShow'>Add Show</Link>{' '}
    //             <Link to='/login'>Login</Link>{' '}
    //             <Link to='/signup'>Sign Up</Link>
    //             <button onClick={logoutUser}>log-out</button>
    //         </div>
    //     </div>
    // )
    if (isUserLoggedIn) {
        return (
            <nav className='logged-in'>
                <Link to="/">
                    <div className='logo'>
                        <h2>Synergie</h2>
                    </div>
                </Link>{" "}
                <Link to='/users'>Users</Link>
                <Link to='/shows'>Shows</Link>{' '}
                <Link to='/addShow'>Add Show</Link>{' '}
                <button className='log-out' onClick={logoutUser}>log-out</button>
            </nav>

        )
    } else {
        return (
            <nav className='not-logged-in'>
                <Link to="/">
                    <Link to="/">
                        <div className='logo'>
                            <h2>Synergie</h2>
                        </div>
                    </Link>{" "}
                </Link>{" "}
                <Link to='/about'>About</Link>{' '}
                <Link to='login'>Log-In</Link>{' '}
                <Link to='/signup'>Sign-Up</Link>{' '}
            </nav>
        )
    }
}