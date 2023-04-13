import Inicio from './Inicio';
import Registro from './Registro';
import InicioSesion from './InicioSesion';
import React from 'react';





function BarraNavegation(){

    function callLogout() {
        logout();
    }

    return (
        <div>
        <ul className="nav flex-column">
            <li className="nav-item">
                <Link to='/'>Inicio</Link>
            </li>
            <li className="nav-item">
                <Link to="/registro">Registro</Link>
            </li>
            <li className="nav-item">
            <Link path="/inicio-sesion"></Link>
            </li>
         </ul>
        </div>


    );

}

export default(BarraNavegation)