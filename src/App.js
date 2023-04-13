import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import DatosDePublicaciones from './components/DatosDePublicaciones';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro';
import Layout from './components/Layout';
import {addOnChangeUserData} from "./data/Authentications";


function App() {
    const [usuario, setUsuario] = useState(null);

    addOnChangeUserData((user) => {
        setUsuario(user);
    })

    return (
        <Router>
        <Layout>
                <Routes>
                    <Route exact path="/" element={<Inicio />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/inicio-sesion" element={<InicioSesion />} />
                    <Route path='/Publicaciones' element={<DatosDePublicaciones />} />
                </Routes>

        </Layout>
        </Router>
    );
}

export default App;
