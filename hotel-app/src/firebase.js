// Import the functions 
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

//  Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiXnTJkPnwHnj0ynkBdcONBbqe_nOlZBA",
  authDomain: "hotel-store-1865b.firebaseapp.com",
  projectId: "hotel-store-1865b",
  storageBucket: "hotel-store-1865b.appspot.com",
  messagingSenderId: "225215699294",
  appId: "1:225215699294:web:deed4e9ee55a271e1097cf",
  measurementId: "G-53YE764BNV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();
export const storage = app.storage();