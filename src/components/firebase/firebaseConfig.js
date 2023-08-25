// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdJdc-UMDX0cfp-O20688eNRoBFfnsq1Q",
  authDomain: "busnotify-81ed9.firebaseapp.com",
  databaseURL: "https://busnotify-81ed9-default-rtdb.firebaseio.com",
  projectId: "busnotify-81ed9",
  storageBucket: "busnotify-81ed9.appspot.com",
  messagingSenderId: "27998110153",
  appId: "1:27998110153:web:be655c1bb151ed7e5b6818",
  measurementId: "G-88VHCYFKF0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
