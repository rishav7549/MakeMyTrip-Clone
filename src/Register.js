import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    alert("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 0);
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="login3">
          <div className="login2">
            <div>
              <img
                style={{ width: "100px", height: "100px" }}
                src="https://cdn-icons-png.flaticon.com/128/10008/10008285.png"
                alt="register-logo"
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
