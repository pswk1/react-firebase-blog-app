// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHI_4FPFqeQ43k3LVE5-aOP5qVTGnnPuA",
  authDomain: "react-firebase-blog-app-2f8a2.firebaseapp.com",
  projectId: "react-firebase-blog-app-2f8a2",
  storageBucket: "react-firebase-blog-app-2f8a2.appspot.com",
  messagingSenderId: "346689403595",
  appId: "1:346689403595:web:b6922ea0346b8e12c2b94e",
  measurementId: "G-TNKP0LSPP1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



