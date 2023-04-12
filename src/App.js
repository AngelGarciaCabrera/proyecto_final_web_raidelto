import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import DatosDePublicaciones from './DatosDePublicaciones';
import Inicio from './Inicio';
import InicioSesion from './InicioSesion';
import Registro from './Registro';


function App() {
    const [usuario, setUsuario] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    const handleLogin = (usuario) => {
        setUsuario(usuario);
    };


    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Inicio/>} />
                <Route path="/registro" element={<Registro/>} />
                <Route path="/inicio-sesion" element={<InicioSesion onLogin={handleLogin}/>} />
                <Route path='/Publicaciones' element={<DatosDePublicaciones/>} />
            </Routes>
        </Router>
    );
}

export default App;
