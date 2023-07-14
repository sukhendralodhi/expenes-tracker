// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDz0LjfhWbyGfUNnrDwEiBQd-qQMzMk84",
    authDomain: "expenses-tracker-4e5c9.firebaseapp.com",
    projectId: "expenses-tracker-4e5c9",
    storageBucket: "expenses-tracker-4e5c9.appspot.com",
    messagingSenderId: "731139050610",
    appId: "1:731139050610:web:faa29b65bc23d3f6e086eb",
    measurementId: "G-EYQCRE0Z86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };