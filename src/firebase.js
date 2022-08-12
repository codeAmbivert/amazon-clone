import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDc8aSlja0KOseXf7EoPwHPR9J_Xvx3tlc",
  authDomain: "challenge-7f924.firebaseapp.com",
  projectId: "challenge-7f924",
  storageBucket: "challenge-7f924.appspot.com",
  messagingSenderId: "155897044003",
  appId: "1:155897044003:web:9115d65652700befa52596",
  measurementId: "G-R7G3FGPNMW",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
