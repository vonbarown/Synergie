import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu';
import './navbar.css'
import { useState } from 'react';

export const Navbar = ({ logoutUser, isUserLoggedIn }) => {

    const [open, setOpen] = useState(false)
    // const [scrollPos, setScrollPos] = useState(window.pageYOffset)

    // const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     if (scrollPos < currentScrollPos) {

    //         setOpen(!open)
    //     }
    //     setScrollPos(currentScrollPos)
    // };

    const dropDown = () => {
        return (
            <div className='hamburgerDropDown' >
                <Link className='navbar-links' onClick={() => setOpen(!open)} id='hamburgerNavItem' to='/users'>Users</Link>
                <Link className='navbar-links' onClick={() => setOpen(!open)} id='hamburgerNavItem' to='/shows'>Shows</Link>{' '}
                <Link className='navbar-links' onClick={() => setOpen(!open)} id='hamburgerNavItem' to='/addShow'>Add Show</Link>{' '}
                <Link className='navbar-links' onClick={() => setOpen(!open)} id='hamburgerNavItem' to='/about'>About</Link>{' '}
                <Link className='navbar-links' onClick={() => setOpen(!open)} id='hamburgerNavItem' to='/profile'>Profile</Link>{' '}

            </div >
        )
    }

    if (isUserLoggedIn) {
        return (
            <nav className='logged-in'>

                <div className='app-logo'>
                    <Link to="/">
                        <div className='logo'>
                            <h2>Synergie</h2>
                        </div>
                    </Link>{" "}
                </div>

                <div className='hamburgerMenu'>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={() => setOpen(!open)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        rotate={0}
                        color='black'
                        borderRadius={0}
                        animationDuration={0.5}
                    />
                </div>
                {
                    open ? dropDown() : null
                }
                <div className='log-out-btn'>
                    <button className='log-out' onClick={logoutUser}>log-out</button>
                </div>

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
                <Link className='navbar-links' to='/about'>About</Link>{' '}
                <Link className='navbar-links' to='login'>Log-In</Link>{' '}
                <Link className='navbar-links' to='/signup'>Sign-Up</Link>{' '}
                <HamburgerMenu
                    isOpen={open}
                    menuClicked={() => setOpen(!open)}
                    width={18}
                    height={15}
                    strokeWidth={1}
                    rotate={0}
                    color='black'
                    borderRadius={0}
                    animationDuration={0.5}
                />
            </nav>
        )
    }
}