import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getAuth, getAdditionalUserInfo, signOut } from 'firebase/auth';
import { app } from '../Firebase/configuracionfirebase';
import Publicacion from './Publication';

function Inicio() {
    

    const [loggeado, setLoggeado] = useState(false);
    const user = getAuth(app);

    const auth = getAuth(app);

    useEffect(() => {
      // Verificar si el usuario está autenticado
      const unsubscribe = auth.onAuthStateChanged((user) => {
        setLoggeado(user != undefined)
      });
  
      return unsubscribe;
    }, [auth]);

    return (
        
        <div>
            
            <div>
                <h1>Bienvenido a la página principal</h1>
                <ul>
                    <li><Link to="/inicio-sesion">Iniciar sesión</Link></li>
                    <li><Link to="/registro">Registrarse</Link></li>
                    { loggeado && <a href='#' onClick={() => {
                        signOut(user)
                        setLoggeado(false)
                    }}>Cerrar sesion</a> }
                </ul>
             </div>  

             {loggeado && <Publicacion /> }
        </div>


    );
}

export default Inicio;


