import { initializeApp } from "firebase/app";
import { getAuth } from'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmeBEmQ2zfjsgEtQJ3ViFPAhEOlJZbFCY",
    authDomain: "pruebas-react-f4d8e.firebaseapp.com",
    projectId: "pruebas-react-f4d8e",
    storageBucket: "pruebas-react-f4d8e.appspot.com",
    messagingSenderId: "410727682059",
    appId: "1:410727682059:web:89b2068029be2a5f8d370e",
    measurementId: "G-BBC9SPPHCC"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)

