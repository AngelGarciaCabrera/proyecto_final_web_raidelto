import React from 'react';
import PublicacionItem from './PublicacionItem'


function PublicacionesList({ publicaciones }) {
    return (
      <div>
        {publicaciones.map((publicacion) => (
          <PublicacionItem key={publicacion.id} publicacion={publicacion} />
        ))}
      </div>
    );
}
export default(PublicacionesList)