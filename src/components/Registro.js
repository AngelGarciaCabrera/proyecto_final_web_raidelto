import React, {useState} from "react";
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import {app, firestoreInstance} from "../Firebase/configuracionfirebase";
import {toast, ToastContainer} from 'react-toastify';
import {addDoc, collection} from 'firebase/firestore'
import {useNavigate} from "react-router-dom";


const auth = getAuth(app);

function Registro() {

    const [usuario, setUsuario] = useState({});


    //Redirection object
    const navigate = useNavigate();


    function addUserData(event) {
        const {target} = event;

        setUsuario((prev) => ({...prev, [target.name]: target.value}))
    }

    const handleSubmit = async (e) => {
            e.preventDefault();

            const errorMessage = () => toast("Error al crear la cuenta:");

            debugger
            await createUserWithEmailAndPassword(auth, usuario.email, usuario.clave).then((userCredential) => {
                // Actualizar el perfil del usuario con su nombre y apellido
                updateProfile(userCredential.user, {
                    displayName: `${usuario.name} ${usuario.apellido}`,
                }).then(() => {
                    const userCollection = collection(firestoreInstance, 'users');

                    addDoc(userCollection, {...usuario, clave: '', userId: auth.currentUser.uid}).then(() => {
                        navigate('/')
                    }).catch(() => {
                        errorMessage();
                    })
                }).catch(() => {
                    errorMessage();
                });
            }).catch(() => {
                errorMessage();
            })
        }
    ;

    return (
        <div className="text-center">
            <h4>Registrarse:</h4>
            <form onSubmit={handleSubmit} className="mx-auto" style={{maxWidth: "300px", padding: "1rem"}}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        id="nombre"
                        name="name"
                        type="text"
                        className="form-control"
                        min={4}
                        required
                        value={usuario.name}
                        onChange={addUserData}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        id="apellido"
                        name="apellido"
                        type="text"
                        min={4}
                        required
                        className="form-control"
                        value={usuario.apellido}
                        onChange={addUserData}
                    />
                </div>
                <div className="">
                    <label htmlFor="email">Correo:</label>
                    <input
                        id="email"
                        type="text"
                        name='email'
                        required
                        className="form-control"
                        value={usuario.email}
                        onChange={addUserData}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="clave">Clave:</label>
                    <input
                        id="clave"
                        type="password"
                        name='clave'
                        required
                        min={4}
                        className="form-control"
                        value={usuario.clave}
                        onChange={addUserData}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{paddingTop: 4, marginTop: "1rem"}}>
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default Registro;
