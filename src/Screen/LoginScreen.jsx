import React, { useState } from "react";
import logo from "../assets/logo.avif";
import "../style.css";

function LoginScreen({ onSuccess }) {
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (password === "1") {
      onSuccess();
    } else {
      alert("Clave incorrecta");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <img src={logo} alt="Logo de la app" className="login-logo" />
          <h2>Acceso al Chat</h2>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
          />
          <button onClick={handleSubmit} className="login-button">
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
