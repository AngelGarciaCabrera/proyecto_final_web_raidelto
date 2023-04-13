import React from "react";
import BarraNavegacion from "./BarraNavegacion";

function Layout(props) {

    return (
        <div>
            <nav className="navbar bg-info" style={{height: 90}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://www.nationalgeographic.com.es/medio/2021/10/02/ghost_5965d71c_800x600.jpg" alt="Logo" width="30" height="24"
                             className="d-inline-block align-text-top" />
                            <span>Bootstrap</span>
                    </a>
                </div>
            </nav>
                <BarraNavegacion />
            <div>
                <div className='d-flex w-25'>

                </div>
                <div className='card'>
                    {props && props.children}
                </div>
            </div>
        </div>
    );

}

export default (Layout)