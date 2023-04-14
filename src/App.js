import React, {useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import DatosDePublicaciones from './components/DatosDePublicaciones';
import Inicio from './components/Inicio';
import InicioSesion from './components/InicioSesion';
import Registro from './components/Registro';
import Layout from './components/Layout';
import {addOnChangeUserData} from "./data/Authentications";
import "react-toastify/dist/ReactToastify.min.css";


function App() {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const unsubscribe = addOnChangeUserData((user) => {
            setUsuario(user);
        });
        return () => unsubscribe();
    }, []);
    document.documentElement.style.overflow = 'hidden';
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
