import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import UpdateProfileForm from "./UpdateProfileForm";
import "./profile.css";

class Profile extends React.Component {
  render() {
    const { loggedUser } = this.props;
    return (
      <div className="profile-page">
        <div className="profile-header">
          <img
            className="profile-page-img"
            src={loggedUser.avatar_url}
            alt={loggedUser.username}
          />
          <div className="sub-header">
            <h1>Welcome {loggedUser.username}</h1>
            <h3>What are you binging?</h3>
          </div>
          <div
            className="chat-links"
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Link className="chat-links-btn" to="/network">
              Network
            </Link>
            <Link className="chat-links-btn" to="/messages">
              Messages
            </Link>
          </div>
        </div>
        <UpdateProfileForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedUser: state.usersReducer.loggedUser.user,
  };
};

export default connect(mapStateToProps, null)(Profile);
