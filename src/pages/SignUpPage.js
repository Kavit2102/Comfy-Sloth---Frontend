import React, { useState } from "react";
import logo from "../assets/logo.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/api/v1/auth/register", {
        name: Name,
        email: Email,
        password: Password,
      })
      .then((response) => {
        alert("User Successfully Registered !!!");
        navigate("/login");
      })
      .catch((error) => {
        alert("Server Error occured : " + error);
        console.log(error);
      });
  };
  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="Company Logo" style={{ maxWidth: "100%" }} />
      </div>
      <form>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
            autoComplete="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              console.log(e.target.value);
              setEmail(e.target.value);
            }}
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
            onChange={(e) => {
              console.log(e.target.value);
              setPassword(e.target.value);
            }}
            autoComplete="true"
          />
        </div>
        <div className="form-group">
          <button type="submit" defaultValue="Sign Up" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
