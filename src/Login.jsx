
import React, { useState } from "react";
import "./style.css";

function Login({ onLogin }) {
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(password);
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <img
          src="/logo.avif" 
          alt="Logo"
          className="login-logo"
        />
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="password"
            placeholder="Clave"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
