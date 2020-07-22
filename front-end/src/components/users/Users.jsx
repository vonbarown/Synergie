import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import { scrolling, setHamburger } from "../../store/actions/userActions";
import "./users.css";

// eslint-disable-next-line
let loggedIn;
class Users extends Component {
  state = {
    prevScrollPos: window.pageYOffset,
    visible: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // handleScroll = () => this.props.scrolling(window.pageYOffset)
  handleScroll = () => {
    const { prevScrollPos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos < currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible,
    });
    // this.props.scrolling(window.pageYOffset)]
  };
  handleBurger = () => {
    const { hamburgerOpen } = this.props;
    setHamburger(!hamburgerOpen);
  };

  render() {
    const { visible } = this.state;
    const { users, loggedUser, network } = this.props;
    let loggedIn;
    return (
      <div className="users" onScroll={this.handleScroll}>
        <h2 className="page-title">Users</h2>
        <div className="container" onClick={this.handleBurger}>
          {users
            ? users.map((el) => {
                if (loggedUser.isUserLoggedIn) {
                  loggedUser.user.username === el.username
                    ? (loggedIn = "Logged In")
                    : (loggedIn = "");
                }
                return (
                  <div key={el.id}>
                    <Link
                      to={`/users/${el.id}`}
                      className="user-profile"
                      key={el.id}
                    >
                      <img
                        className="profile-pic"
                        src={el.avatar_url}
                        alt="user-profile"
                      />
                      <div className="user-meta-data">
                        <p>{el.username}</p>
                        <p>{loggedIn}</p>
                      </div>
                    </Link>

                    {loggedUser.user.username !== el.username ? (
                      <button
                        value={el.id}
                        onClick={network}
                        className="connect"
                      >
                        Connect
                      </button>
                    ) : null}
                  </div>
                );
              })
            : null}
        </div>
        <div className="page-actions">
          <Link to="/messages">
            <button className="scroll message">Messages</button>
          </Link>
          {visible ? (
            <button className="scroll" onClick={() => scroll.scrollToTop()}>
              Scroll To Top
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    loggedUser: state.usersReducer.loggedUser,
    hamburgerOpen: state.usersReducer.hamburgerOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    scrolling: (data) => dispatch(scrolling(data)),
    setHamburger: (data) => dispatch(setHamburger(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
