// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb3Hwn03pgRDcIlRUhFspCPknpAgOfeWU",
  authDomain: "react-notes-46426.firebaseapp.com",
  projectId: "react-notes-46426",
  storageBucket: "react-notes-46426.firebasestorage.app",
  messagingSenderId: "896829293941",
  appId: "1:896829293941:web:5b4d423007c71d696a3f3c",
  measurementId: "G-QWC7CT2RL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")

// const analytics = getAnalytics(app);