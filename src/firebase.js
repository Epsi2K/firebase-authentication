// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHDl2eDKwSTus51TSD6Nkx3MdCkBHrbeE",
    authDomain: "fir-auth-e9ca8.firebaseapp.com",
    projectId: "fir-auth-e9ca8",
    storageBucket: "fir-auth-e9ca8.appspot.com",
    messagingSenderId: "530023235637",
    appId: "1:530023235637:web:e6ff4718cd9a24016e317c",
    measurementId: "G-QKZWR7370N"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
