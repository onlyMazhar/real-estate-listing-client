// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHZgacZwsjumHYrimzDp7imYpYWudzSGs",
  authDomain: "real-state-listing-27c20.firebaseapp.com",
  projectId: "real-state-listing-27c20",
  storageBucket: "real-state-listing-27c20.firebasestorage.app",
  messagingSenderId: "294705400367",
  appId: "1:294705400367:web:16a13d23f3356ddc0f94da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);