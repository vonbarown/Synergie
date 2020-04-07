import React from "react";
import "./authForms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = ({ username, password, handleChange, loginUser }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="instruction">
          <h2> Login </h2>
          <p>Enter your credentials to continue</p>
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
          value="log-in"
          className="login-button form-button"
        />
      </form>
    </div>
  );
};

export default LoginForm;
