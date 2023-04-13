import React, { useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { firestoreInstance } from '../Firebase/configuracionfirebase';

function Publicacion() {
    const [mensaje, setMensaje] = useState('');
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');

    const auth = getAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();

        onAuthStateChanged(auth, async (user) => {
          if (user) {
            try {
              const nuevaPublicacion = {
                titulo: titulo,
                contenido: contenido,
                usuario: user.uid,
                fecha: new Date(),
              };

              const publicacionesRef = collection(firestoreInstance, 'publicaciones')
              await addDoc(publicacionesRef, nuevaPublicacion);
            } catch (error) {
              console.error('Error al agregar la publicación:', error);
            }
          } else {
            console.log('Usuario no autenticado');
          }
        });
      };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="titulo">Título:</label>
                <input
                    id="titulo"
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="contenido">Contenido:</label>
                <textarea
                    id="contenido"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                ></textarea>
            </div>
            {mensaje && <p>{mensaje}</p>}
            <button type="submit">Publicar</button>
        </form>
    );
}

export default Publicacion;