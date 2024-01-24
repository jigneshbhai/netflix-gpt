// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmRS1fbpkYJEnB_d2bFih9J4-earGQA78",
  authDomain: "netfixgpt-45fa7.firebaseapp.com",
  projectId: "netfixgpt-45fa7",
  storageBucket: "netfixgpt-45fa7.appspot.com",
  messagingSenderId: "891315002052",
  appId: "1:891315002052:web:63c2dd9cf278d2e86a8791",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)