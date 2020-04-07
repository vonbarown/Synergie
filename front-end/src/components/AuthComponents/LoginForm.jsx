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
      <h2> Log-In </h2>
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
          value="log-in"
          className="login-button form-button"
        />
      </form>
    </div>
  );
};

export default LoginForm;
