// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7qJ1_Nv8xffhTRLPmYqlIeJ5_y6Z4ttw",
  authDomain: "prepwise-c32ea.firebaseapp.com",
  projectId: "prepwise-c32ea",
  storageBucket: "prepwise-c32ea.firebasestorage.app",
  messagingSenderId: "872812233414",
  appId: "1:872812233414:web:ed971478eedd4bb0420dc7",
  measurementId: "G-850DDTF7QK"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);

