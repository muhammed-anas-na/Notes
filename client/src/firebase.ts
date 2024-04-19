// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2lUzt5Y8hX61xvAE9zMTGjOC2PQQVDEw",
  authDomain: "authentication-a0eb6.firebaseapp.com",
  projectId: "authentication-a0eb6",
  storageBucket: "authentication-a0eb6.appspot.com",
  messagingSenderId: "487949166144",
  appId: "1:487949166144:web:6937129c25dc18b754e1a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);