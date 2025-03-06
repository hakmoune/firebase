// Un SDK (Software Development Kit) est un ensemble d'outils et de bibliothèques fournis par Firebase pour intégrer ses services dans une application.
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFoMB9BJgpcJtIj-FP1y52EZWr8SKl2b0",
  authDomain: "fir-cours-b4f31.firebaseapp.com",
  projectId: "fir-cours-b4f31",
  storageBucket: "fir-cours-b4f31.firebasestorage.app",
  messagingSenderId: "643073809259",
  appId: "1:643073809259:web:fbaf132a19c7e5967f8a2e",
  measurementId: "G-SSRF60TBV3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvide = new GoogleAuthProvider();
