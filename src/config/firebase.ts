// Un SDK (Software Development Kit) est un ensemble d'outils et de bibliothèques fournis par Firebase pour intégrer ses services dans une application.
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);

// Athentication email password and Google Provider
export const auth = getAuth(app);
export const googleProvide = new GoogleAuthProvider();

// Database
export const db = getFirestore(app);
