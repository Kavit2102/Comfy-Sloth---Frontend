import React, { useState } from "react";
import logo from "../assets/logo.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/auth/login", {
        email: Email,
        password: Password,
      })
      .then((response) => {
        alert("Successfully logged in !!!");
        history("/");
        setUser(true);
      })
      .catch((error) => {
        alert("Sorry !!! Server Error occured  or Invalid Credentials !!!");
      });
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Company Logo" style={{ maxWidth: "100%" }} />
      </div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="true"
          />
        </div>
        <div className="form-group">
          <button type="submit" defaultValue="Login" onClick={handleLogin}>
            Log In
          </button>
        </div>
        <div className="form-group">
          <span>Dont have account </span>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
