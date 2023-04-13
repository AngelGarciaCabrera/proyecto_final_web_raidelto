import React from 'react';
import {Link} from "react-router-dom";
import {isLogged, logout} from "../data/Authentications";

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
            <li>{ isLogged() && <a href='#' onClick={callLogout}>Cerrar sesion</a> }</li>
         </ul>
        </div>


    );

}

export default(BarraNavegation)