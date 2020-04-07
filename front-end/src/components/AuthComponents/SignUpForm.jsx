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
      <h2> Sign-Up </h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <FontAwesomeIcon icon={["fas", "user-alt"]} />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <input
          type="text"
          name="avatar_url"
          value={avatar_url}
          placeholder="Url"
          onChange={handleChange}
          className="form-input"
        />
        <div>
          <FontAwesomeIcon icon={["fas", "key"]} />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="*******"
            onChange={handleChange}
            className="form-input"
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
