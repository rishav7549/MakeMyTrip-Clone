import "./styles/App.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      setUsername(username);
      alert("Login successful!");
      navigate("/");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login3">
          <div className="login2">
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://cdn-icons-png.flaticon.com/128/7856/7856126.png"
                alt="login-logo"
              />
            </div>
            <div>
              <label>
                Username:
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
          <button type="submit" className="button-64">
            Login
          </button>
          <p>
            Don't have an account yet? <Link to="/register">Register now</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
