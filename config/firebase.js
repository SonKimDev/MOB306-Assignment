// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD2qwMAiK7TnPDIqNVQYQishUZdxIf7nA",
  authDomain: "mod306-assignment.firebaseapp.com",
  databaseURL: "https://mod306-assignment-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mod306-assignment",
  storageBucket: "mod306-assignment.appspot.com",
  messagingSenderId: "312744420073",
  appId: "1:312744420073:web:df4cb9b28f2b0bb8b00678"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };