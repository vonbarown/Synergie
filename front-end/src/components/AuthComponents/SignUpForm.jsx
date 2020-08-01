import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupForm = ({
  username,
  password,
  handleChange,
  signupUser,
  avatar_url,
  passwordStrength,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser();
  };

  const validPasswordObj = {
    strong: "#54c144",
    medium: "#fa7500",
    weak: "#f5301f",
  };

  console.log(validPasswordObj[passwordStrength]);
  return (
    <div className="signup-auth-page auth-page">
      <div className="password-rule">
        <p>Password must contain :</p>
        <p>
          least 1 lowercase alphabetical character The string must contain at
        </p>
        <p>
          least 1 uppercase alphabetical character The string must contain at
        </p>
        <p>
          least 1 numeric character The string must contain at least one special
        </p>
      </div>
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
            placeholder="Avatar url"
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
            placeholder="*************"
            onChange={handleChange}
            className="form-input"
            required
          />
          <div
            style={{
              backgroundColor: validPasswordObj[passwordStrength],
              color: "white",
              marginTop: "5px",
              width: "90%",
              margin: "8%",
              marginBottom: "-35px",
              borderRadius: "5px",
              height: "20px",
            }}
          >
            {`${passwordStrength} password`}
          </div>
        </div>
        <input
          disabled={passwordStrength === "strong" ? false : true}
          type="submit"
          value="Signup"
          className="signup-button form-button"
        />
      </form>
    </div>
  );
};

export default SignupForm;
