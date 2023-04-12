import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "./Firebase/configuracionfirebase";

function Registro() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");

const auth = getAuth(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, usuario, clave)
      .then((userCredential) => {
        // Actualizar el perfil del usuario con su nombre y apellido
        userCredential.user.updateProfile({
          displayName: `${nombre} ${apellido}`,
        });
      })
      .catch((error) => {
        console.error("Error al crear la cuenta:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Usuario:</label>
        <input
          id="usuario"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="clave">Clave:</label>
        <input
          id="clave"
          type="password"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="apellido">Apellido:</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
}


export default Registro;
