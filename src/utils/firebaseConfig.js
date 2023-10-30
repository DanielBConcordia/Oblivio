import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAx71-mioRl3PMnLGJ0627d3iOBDPUtMOg",
  authDomain: "bd-oblivio.firebaseapp.com",
  projectId: "bd-oblivio",
  storageBucket: "bd-oblivio.appspot.com",
  messagingSenderId: "197084481417",
  appId: "1:197084481417:web:fdb370df661bfe2a5a0358",
  measurementId: "G-H9V4R5TG1F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export default auth;