import {getAuth, signOut} from "firebase/auth";
import {app} from "../Firebase/configuracionfirebase";

const auth = getAuth(app);

export function addOnChangeUserData(callback) {
    const onChangeAction = auth.onAuthStateChanged((user) => {
        callback(user);
    });

    return onChangeAction;
}

export function isLogged(){
    const user = getUser();
    return user !== null

}

export function getUser() {
    return auth.currentUser;
}

export function logout() {
    signOut(auth);
}