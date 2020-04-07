import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupForm = ({
  username,
  password,
  handleChange,
  signupUser,
  avatar_url,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="instruction">
          <h2> Sign Up </h2>
          <p>Create a new account by entering account info</p>
        </div>
        <div className="icon-input-container">
          <FontAwesomeIcon icon={["fas", "user-alt"]} className="fa-icon" />{" "}
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="icon-input-container">
          <FontAwesomeIcon icon={["fas", "upload"]} className="fa-icon" />{" "}
          <input
            type="text"
            name="avatar_url"
            value={avatar_url}
            placeholder="Url"
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="icon-input-container">
          <FontAwesomeIcon icon={["fas", "key"]} className="fa-icon" />{" "}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="*******"
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <input
          type="submit"
          value="Signup"
          className="signup-button form-button"
        />
      </form>
    </div>
  );
};

export default SignupForm;
