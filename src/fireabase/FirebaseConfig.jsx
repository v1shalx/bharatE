// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACXfhYaMszVE6D4GjFMjr4aVTmZBVB1qY",
  authDomain: "bharate-1e026.firebaseapp.com",
  projectId: "bharate-1e026",
  storageBucket: "bharate-1e026.appspot.com",
  messagingSenderId: "856558965373",
  appId: "1:856558965373:web:a7334bcd650e0410ba5714",
  measurementId: "G-JZKRJH6BQ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}