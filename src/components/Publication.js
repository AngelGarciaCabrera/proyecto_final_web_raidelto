import React, {useState} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {addDoc, collection} from 'firebase/firestore';
import {firestoreInstance} from '../Firebase/configuracionfirebase';
import {getUser, isLogged} from "../data/Authentications";
import {toast} from "react-toastify";

function Publicacion() {

    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');

    const user = getUser();

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (isLogged()) {

            const nuevaPublicacion = {
                titulo: titulo,
                contenido: contenido,
                usuarioID: user.uid,
                usuario: user.displayName,
                fecha: new Date(),
            };

            const publicacionesRef = collection(firestoreInstance, 'publicaciones')
            addDoc(publicacionesRef, nuevaPublicacion).then(() => {
                toast.success("Publicacion Enviada")
            }).catch(() => {
                toast.error('Error al agregar la publicación:');
            });
        }
    };


    return (
        <div className="p-3">
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Bienvenido <strong>{user.displayName}</strong></span>
                </div>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">
                        Título:
                    </label>
                    <input
                        id="titulo"
                        type="text"
                        className="form-control"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contenido" className="form-label">
                        Contenido:
                    </label>
                    <textarea
                        id="contenido"
                        className="form-control"
                        value={contenido}
                        onChange={(e) => setContenido(e.target.value)}
                    ></textarea>
                </div>


                <button type="submit" className="btn btn-primary">
                    Publicar
                </button>
            </form>
        </div>
    );
}

export default Publicacion;