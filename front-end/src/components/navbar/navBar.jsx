import React from "react";
import { Link } from "react-router-dom";
import { setHamburger } from "../../store/actions/userActions";
import { DrawerToggleButton } from "./drawerToggle";
import { connect } from "react-redux";
import "./navbar.css";

const Navbar = ({ logoutUser, isUserLoggedIn, drawerClick }) => {
  // const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (scrollPos < currentScrollPos) {

  //         setOpen(!open)
  //     }
  //     setScrollPos(currentScrollPos)
  // };

  if (isUserLoggedIn) {
    return (
      <nav className={"logged-in navbar"}>
        <div className="sidebar-toggle-button">
          <DrawerToggleButton click={drawerClick} />
        </div>
        <div className="app-logo">
          <Link to="/">
            <div className="logo">
              <h2>Synergie</h2>
            </div>
          </Link>{" "}
        </div>
        <div className="nav-items">
          <Link className="navbar-links" id="hamburgerNavItem" to="/users">
            Users
          </Link>
          <Link className="navbar-links" id="hamburgerNavItem" to="/shows">
            Shows
          </Link>{" "}
          <Link className="navbar-links" id="hamburgerNavItem" to="/addShow">
            Add Show
          </Link>{" "}
          <Link className="navbar-links" id="hamburgerNavItem" to="/about">
            About
          </Link>{" "}
          <Link className="navbar-links" id="hamburgerNavItem" to="/profile">
            Profile
          </Link>{" "}
          <Link className="navbar-links" to="/messages">
            Messages
          </Link>
          <div className="log-out-btn">
            <button className="log-out" onClick={logoutUser}>
              log-out
            </button>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={"not-logged-in navbar"}>
        <Link to="/">
          <div className="logo">
            <h2>Synergie</h2>
          </div>
        </Link>{" "}
        <div className="sidebar-toggle-button">
          <DrawerToggleButton click={drawerClick} />
        </div>
        <div className="nav-items">
          <Link className="navbar-links" to="/about">
            About
          </Link>{" "}
          <Link className="navbar-links" to="login">
            Log-In
          </Link>{" "}
          <Link className="navbar-links" to="/signup">
            Sign-Up
          </Link>{" "}
        </div>
      </nav>
    );
  }
};

const mapStateToProp = (state) => {
  return {
    hamburgerOpen: state.usersReducer.hamburgerOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setHamburger: (data) => dispatch(setHamburger(data)),
  };
};

export default connect(mapStateToProp, mapDispatchToProps)(Navbar);
