import React from 'react';
import './index.css';
import { useState } from 'react';

function Inicio() {
    const [publicaciones, setPublicaciones] = useState([]);

    return (
        <div>
            <h3>Pruba de render </h3>
        </div>
    );
}

export default Inicio;
