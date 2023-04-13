import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import DatosDePublicaciones from './components/DatosDePublicaciones';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro';
import Layout from './components/Layout';


function App() {
    const [usuario, setUsuario] = useState(null);
    const [publicaciones, setPublicaciones] = useState([]);

    const handleLogin = (usuario) => {
        setUsuario(usuario);
    };


    return (
        <Layout>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/inicio-sesion" element={<InicioSesion onLogin={handleLogin} />} />
                    <Route path='/Publicaciones' element={<DatosDePublicaciones />} />
                </Routes>
            </Router>
        </Layout>
    );
}

export default App;
