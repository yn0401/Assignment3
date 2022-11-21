// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1epA4HWgX2-aLt860mDpLJKbvPfPXtOc",
  authDomain: "assignment3-cb6a0.firebaseapp.com",
  projectId: "assignment3-cb6a0",
  storageBucket: "assignment3-cb6a0.appspot.com",
  messagingSenderId: "901456129583",
  appId: "1:901456129583:web:7e8b02e062f7fb8fa920da",
  measurementId: "G-YLZCJ5WQ4Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);