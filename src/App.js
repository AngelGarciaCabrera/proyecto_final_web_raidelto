import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
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
      <Route exact path="/" component={<Inicio />} />
      <Route path="/registro" component={<Registro />} />
      <Route path="/inicio-sesion" component={<InicioSesion onLogin={handleLogin} />} />
      <Route path='/Publicaciones' component={<DatosDePublicaciones />}></Route>
    </Router>
  );
}

export default App;
