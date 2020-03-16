import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from 'react-hamburger-menu';
import { setHamburger } from '../../store/actions/userActions'
import { connect } from 'react-redux';
import './navbar.css'

const Navbar = ({ logoutUser, isUserLoggedIn, hamburgerOpen, setHamburger }) => {

    // const handleScroll = () => {
    //     const currentScrollPos = window.pageYOffset;
    //     if (scrollPos < currentScrollPos) {

    //         setOpen(!open)
    //     }
    //     setScrollPos(currentScrollPos)
    // };

    const dropDown = () => {
        return (
          <div className="hamburgerDropDown">
            <Link
              className="navbar-links"
              onClick={() => setHamburger(!hamburgerOpen)}
              id="hamburgerNavItem"
              to="/users"
            >
              Users
            </Link>
            <Link
              className="navbar-links"
              onClick={() => setHamburger(!hamburgerOpen)}
              id="hamburgerNavItem"
              to="/shows"
            >
              Shows
            </Link>{" "}
            <Link
              className="navbar-links"
              onClick={() => setHamburger(!hamburgerOpen)}
              id="hamburgerNavItem"
              to="/addShow"
            >
              Add Show
            </Link>{" "}
            <Link
              className="navbar-links"
              onClick={() => setHamburger(!hamburgerOpen)}
              id="hamburgerNavItem"
              to="/about"
            >
              About
            </Link>{" "}
            <Link
              className="navbar-links"
              onClick={() => setHamburger(!hamburgerOpen)}
              id="hamburgerNavItem"
              to="/profile"
            >
              Profile
            </Link>{" "}
            <Link
              onClick={() => setHamburger(!hamburgerOpen)}
              className="navbar-links"
              to="/messages"
            >
              Messages
            </Link>
          </div>
        );
    }

    if (isUserLoggedIn) {
        return (
            <nav className='logged-in navbar'>

                <div className='app-logo'>
                    <Link to="/" onClick={() => setHamburger(!hamburgerOpen)}>
                        <div className='logo'>
                            <h2 onClick={() => setHamburger(!hamburgerOpen)} >Synergie</h2>
                        </div>
                    </Link>{" "}
                </div>

                <div className='hamburgerMenu'>
                    <HamburgerMenu
                        isOpen={hamburgerOpen}
                        menuClicked={() => setHamburger(!hamburgerOpen)}
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
                    hamburgerOpen ? dropDown() : null
                }
                <div className='log-out-btn'>
                    <button className='log-out' onClick={logoutUser}>log-out</button>
                </div>

            </nav>

        )
    } else {
        return (
            <nav className='not-logged-in navbar'>
                <Link to="/">
                    <div className='logo'>
                        <h2>Synergie</h2>
                    </div>
                </Link>{" "}
                <Link className='navbar-links' to='/about'>About</Link>{' '}
                <Link className='navbar-links' to='login'>Log-In</Link>{' '}
                <Link className='navbar-links' to='/signup'>Sign-Up</Link>{' '}
                <HamburgerMenu
                    isOpen={hamburgerOpen}
                    menuClicked={() => setHamburger(!hamburgerOpen)}
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

const mapStateToProp = (state) => {
    return {
        hamburgerOpen: state.usersReducer.hamburgerOpen
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setHamburger: data => dispatch(setHamburger(data))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Navbar)