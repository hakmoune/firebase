// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFoMB9BJgpcJtIj-FP1y52EZWr8SKl2b0",
  authDomain: "fir-cours-b4f31.firebaseapp.com",
  projectId: "fir-cours-b4f31",
  storageBucket: "fir-cours-b4f31.firebasestorage.app",
  messagingSenderId: "643073809259",
  appId: "1:643073809259:web:fbaf132a19c7e5967f8a2e",
  measurementId: "G-SSRF60TBV3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Un SDK (Software Development Kit) est un ensemble d'outils et de bibliothèques fournis par Firebase pour intégrer ses services dans une application.
