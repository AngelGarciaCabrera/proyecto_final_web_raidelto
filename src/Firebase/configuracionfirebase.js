
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1QyqYk1juyMS_qeEqNM-4GIrEhidhCgo",
    authDomain: "proyecto-final-react-e2832.firebaseapp.com",
    projectId: "proyecto-final-react-e2832",
    storageBucket: "proyecto-final-react-e2832.appspot.com",
    messagingSenderId: "924499923774",
    appId: "1:924499923774:web:689bfe522a0ccea470926f"
  };


 export const app = initializeApp(firebaseConfig);
  export const firestoreInstance = getFirestore(app);



