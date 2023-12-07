// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-45a08.firebaseapp.com",
  projectId: "realestate-45a08",
  storageBucket: "realestate-45a08.appspot.com",
  messagingSenderId: "1048638066236",
  appId: "1:1048638066236:web:97c59d47d340a4cfdefd39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);