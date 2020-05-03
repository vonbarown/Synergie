import React from "react";
import { Link } from "react-router-dom";
import { setHamburger } from "../../store/actions/userActions";
import { connect } from "react-redux";
import "./navbar.css";

const SideDrawer = ({ logoutUser, isUserLoggedIn, show, drawerClick }) => {
  // const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     if (scrollPos < currentScrollPos) {

  //         setOpen(!open)
  //     }
  //     setScrollPos(currentScrollPos)
  // };

  if (isUserLoggedIn) {
    return (
      <nav
        className={show ? "not-logged-in open" : "side-drawer not-logged-in"}
      >
        <div className="app-logo">
          <Link to="/" onClick={drawerClick}>
            <div className="logo">
              <h2>Synergie</h2>
            </div>
          </Link>{" "}
        </div>
        <Link
          className="navbar-links"
          id="hamburgerNavItem"
          to="/users"
          onClick={drawerClick}
        >
          Users
        </Link>
        <Link
          className="navbar-links"
          id="hamburgerNavItem"
          to="/shows"
          onClick={drawerClick}
        >
          Shows
        </Link>{" "}
        <Link
          className="navbar-links"
          id="hamburgerNavItem"
          to="/addShow"
          onClick={drawerClick}
        >
          Add Show
        </Link>{" "}
        <Link
          className="navbar-links"
          id="hamburgerNavItem"
          to="/about"
          onClick={drawerClick}
        >
          About
        </Link>{" "}
        <Link
          className="navbar-links"
          id="hamburgerNavItem"
          to="/profile"
          onClick={drawerClick}
        >
          Profile
        </Link>{" "}
        <Link className="navbar-links" to="/messages" onClick={drawerClick}>
          Messages
        </Link>
        <div className="log-out-btn">
          <button className="log-out" onClick={logoutUser}>
            log-out
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        className={show ? "not-logged-in open" : "side-drawer not-logged-in"}
      >
        <Link to="/" onClick={drawerClick}>
          <div className="logo">
            <h2>Synergie</h2>
          </div>
        </Link>{" "}
        <Link className="navbar-links" to="/about" onClick={drawerClick}>
          About
        </Link>{" "}
        <Link className="navbar-links" to="/login" onClick={drawerClick}>
          Log-In
        </Link>{" "}
        <Link className="navbar-links" to="/signup" onClick={drawerClick}>
          Sign-Up
        </Link>{" "}
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

export default connect(mapStateToProp, mapDispatchToProps)(SideDrawer);
