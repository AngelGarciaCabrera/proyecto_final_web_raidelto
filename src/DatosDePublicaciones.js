import React, { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import PublicacionesList from "./PublicacionesLista";
import { firestoreInstance } from "./Firebase/configuracionfirebase";


function DatosDePublicaciones(){

  const [DatosPublicaciones, setDatosPublicaciones]= useState([]);
  useEffect(()=>{
    obtenerPublicaciones().then(data => {
        setDatosPublicaciones(data);
        console.log(data);
    }).catch(error => {
        alert('Fallo durisimo!')
    });
  })

  async function obtenerPublicaciones() {
    const publicacionesRef = collection(firestoreInstance, 'publicaciones');
    const snapshot = await getDocs(publicacionesRef);
    const publicaciones = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return publicaciones;
    
  }

  return (<PublicacionesList publicaciones={DatosPublicaciones} /> )
}
export default  DatosDePublicaciones

