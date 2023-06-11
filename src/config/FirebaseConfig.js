import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu8A0Pj5YifU2xRRtlmSNp4eH6lXShikU",
  authDomain: "rnauthagenda.firebaseapp.com",
  projectId: "rnauthagenda",
  storageBucket: "rnauthagenda.appspot.com",
  messagingSenderId: "341022661041",
  appId: "1:341022661041:web:29e533db1ce8622030c590"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);