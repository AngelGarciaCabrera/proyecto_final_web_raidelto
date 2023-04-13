import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app} from "../Firebase/configuracionfirebase";
import { toast, ToastContainer } from 'react-toastify';


const auth = getAuth(app);
function Registro() {
  
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, usuario, clave);
      // Actualizar el perfil del usuario con su nombre y apellido
      await updateProfile(userCredential.user, {
        displayName: `${nombre} ${apellido}`,
      });
      toast.success("Coronamos!")
    } catch (error) {
      console.error("Error al crear la cuenta:", error);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
          
      <div>
      <ToastContainer style={{'width' :'80px'}}/>
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
      {error && <div>{error}</div>}
      <button type="submit">Registrarse</button>
    </form>
    
  );
}

export default Registro;
