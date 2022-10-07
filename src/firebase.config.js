// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdtJm4Id3IlaYWIP3M2LkCyZ4Rtqz5h-4",
  authDomain: "fb-waitlist.firebaseapp.com",
  projectId: "fb-waitlist",
  storageBucket: "fb-waitlist.appspot.com",
  messagingSenderId: "1086996663952",
  appId: "1:1086996663952:web:1bce62a1698ba0157d1215",
  measurementId: "G-Y3QJMWKEEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore()