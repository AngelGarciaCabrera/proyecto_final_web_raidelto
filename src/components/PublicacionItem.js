import React from 'react';

function PublicacionItem({ publicacion }) {
    return (
      <div>
        <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

               
          <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <img src="..." class="rounded me-2" alt="..."/>
              <strong class="me-auto">{publicacion.usuario}</strong>
              <small>{publicacion.fecha.toDateString()}</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <h3>{publicacion.titulo}</h3>
            <div class="toast-body">
            {publicacion.contenido}
            </div>
          </div>
          </div>
      </div>
    );
}

export default(PublicacionItem);
