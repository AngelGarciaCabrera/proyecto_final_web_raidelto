import Inicio from './Inicio';
import Registro from './Registro';
import InicioSesion from './InicioSesion';
import React from 'react';





function BarraNavegation(){
    

    return (
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li class="nav-item">
              <link exact path="/" element={<Inicio/>} />
            </li>
            <li class="nav-item">
                 <Route path="/registro" element={<Registro/>} />
            </li>
            <li class="nav-item">
            <Route path="/inicio-sesion" element={<InicioSesion onLogin={handleLogin}/>} />
            </li>
         </ul>
    );

}

export default(BarraNavegation)