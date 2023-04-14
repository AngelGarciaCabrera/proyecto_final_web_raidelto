import React from "react";
import BarraNavegacion from "./BarraNavegacion";

function Layout(props) {

    return (
        <div>
            <nav className="navbar bg-success" style={{height: 90}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="foto.png" alt="Logo" width="50" height="40"
                             className="d-inline-block align-text-top" />
                            <span className={'text-white'}> Tus Publicaciones Web</span>
                    </a>
                </div>
            </nav>
                <BarraNavegacion />
            <div>
                <div className='d-flex w-25'>

                </div>
                <div className='' style={{
                    paddingTop:'2%',
                    width: '75%',
                    left: '25%',
                    position:' relative',



                }}>
                        <div className=''>
                            {props && props.children}
                        </div>

                    </div>

                </div>

        </div>
    );

}

export default (Layout)