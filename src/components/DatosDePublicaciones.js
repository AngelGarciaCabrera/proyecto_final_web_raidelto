import React, { useEffect, useState } from "react";
import {collection, getDocs, query} from 'firebase/firestore';

import { firestoreInstance } from "../Firebase/configuracionfirebase";


function DatosDePublicaciones(){

  const [DatosPublicaciones, setDatosPublicaciones]= useState([]);
  useEffect(()=>{
    obtenerPublicaciones().then(data => {
        setDatosPublicaciones(data);
    }).catch(error => {
        alert('Fallo durisimo!')
    });
  })

  async function obtenerPublicaciones() {
    const publicacionesCollecion = collection(firestoreInstance, 'publicaciones');
    const qry = query(publicacionesCollecion);
    return await getDocs(qry).then(snapshot=>{
      const publicaciones = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return publicaciones;
    })

    
  }

  return (

      <div className="container" style={{ width: 'auto', height: '700px', overflowY: 'auto', paddingTop: '5%' }}>
          <h1>Publicaciones</h1>
          <div className="card mb-4" ></div>

              <div className="row post-list">
                  {DatosPublicaciones.map((publicaciones) => (
                      <div key={publicaciones.id} className="col-12">
                          <div className="card mb-3">
                              <div className="card-body">
                                  <h5 className="card-title">{publicaciones.titulo}</h5>
                                  <p className="card-text">{publicaciones.contenido}</p>
                              </div>
                              <div className={'card-title p-3'}>
                                  <p className={'fw-bold'}> {publicaciones.usuario}</p>

                              </div>
                          </div>
                      </div>
                  ))}
              </div>

      </div>
  )
}
export default  DatosDePublicaciones

