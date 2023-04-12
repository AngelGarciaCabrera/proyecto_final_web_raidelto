import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los campos del formulario
    if (email.trim() === "" || password.trim() === "") {
      alert("Ingresa un email y contraseña válidos.");
      return;
    }
    // Llamar a la función onLogin del padre
    onLogin(email, password);
    // Limpiar los campos del formulario
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;
