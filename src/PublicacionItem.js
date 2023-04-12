import React from 'react';

function PublicacionItem({ publicacion }) {
    return (
      <div>
        <h3>{publicacion.titulo}</h3>
        <p>{publicacion.contenido}</p>
        <p>
          Publicado por {publicacion.usuario} el {publicacion.fecha.toDateString()}
        </p>
      </div>
    );
}

export default(PublicacionItem);
