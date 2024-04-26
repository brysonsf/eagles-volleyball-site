import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
  import { getFirestore } from 'firebase/firestore'
// Required for side-effects
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDwkLNpsrdUdtdrVbrIhymqx6tMF6kHSc",
  authDomain: "eagles-volleyball-site.firebaseapp.com",
  projectId: "eagles-volleyball-site",
  storageBucket: "eagles-volleyball-site.appspot.com",
  messagingSenderId: "586941028563",
  appId: "1:586941028563:web:406d62c3aff0d552855c26",
  measurementId: "G-K7BGX2Q8BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;