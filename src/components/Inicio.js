import React from 'react';
import {Link} from 'react-router-dom';
import Publicacion from './Publication';
import { logout, isLogged } from "../data/Authentications";

function Inicio() {

    function callLogout() {
        logout();
    }

    return (
        <div>
            <div>
                <h1>Bienvenido a la página principal</h1>
             </div>  

             {isLogged() && <Publicacion /> }
        </div>


    );
}

export default Inicio;


