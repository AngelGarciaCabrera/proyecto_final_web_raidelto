import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { app } from '../Firebase/configuracionfirebase';
import { toast,ToastContainer } from 'react-toastify';


function InicioSesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const auth = getAuth(app);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const toastConfig =  {
      position: 'top-center'
    };
    try {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        toast.success("Coronamos!", toastConfig)
      }).catch((e) => {
        toast.error(e.message, toastConfig)
      })
    } catch (error) {
      setError(error.message);
    }
  };

  return (
      <div className="d-flex justify-content-center align-items-center p-3">
        <div>
          <ToastContainer />
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico:</label>
              <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña:</label>
              <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" style={{marginTop: '1rem'}} className="btn btn-primary">Iniciar Sesión</button>
          </form>
        </div>
      </div>
  );
}

export default InicioSesion;
