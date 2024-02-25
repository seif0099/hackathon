import React, { useState } from "react";
import { Redirect, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/main.css";
import "./css/util.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Login successful");
        setLoggedIn(true);
        Navigate("/upload");
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-26">Welcome</span>
            <span className="login100-form-title p-b-48">
              <i className="zmdi zmdi-font"></i>
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is: a@b.c"
            >
              <input
                className="input100"
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <span className="btn-show-pass">
                <i className="zmdi zmdi-eye"></i>
              </span>
              <input
                className="input100"
                type="password"
                name="pass"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input100"></span>
            </div>

            <div className="container-login100-form-btn">
              <div className="wrap-login100-form-btn">
                <div className="login100-form-bgbtn"></div>
                <button className="login100-form-btn" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>

            <div className="text-center p-t-115"></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
