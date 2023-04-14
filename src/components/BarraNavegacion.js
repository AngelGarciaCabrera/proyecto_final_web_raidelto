import React from 'react';
import {Link} from "react-router-dom";
import {isLogged, logout} from "../data/Authentications";
import 'animate.css';

function BarraNavegation(){

    function callLogout() {
        logout();
    }

    return (
        <div
            className="bg-dark text-white px-0 d-flex flex-column justify-content-center align-items-center"
            style={{
                position: "fixed",
                top: 90,
                left: 0,
                height: "100%",
                width: "25%",
            }}
        >
            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link
                        to="/"
                        className="nav-link text-white my-2 animate__animated animate__fadeIn animate__fast"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/registro"
                        className="nav-link text-white my-2 animate__animated"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Registro
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/inicio-sesion"
                        className="nav-link text-white my-2 animate__animated animate__fadeIn animate__fast"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Inicio de sesión
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/Publicaciones"
                        className="nav-link text-white my-2 animate__animated animate__fadeIn animate__fast"
                        data-aos="fade-up"
                        data-aos-duration="500"
                    >
                        Publicaciones
                    </Link>
                </li>


                <li>
                    {isLogged() && (
                        <a
                            href="#"
                            className="nav-link text-white my-2 animate__animated animate__fadeIn animate__fast"
                            data-aos="fade-up"
                            data-aos-duration="500"
                            onClick={callLogout}
                        >
                            Cerrar sesión
                        </a>
                    )}
                </li>
            </ul>
        </div>
    );

}

export default(BarraNavegation)