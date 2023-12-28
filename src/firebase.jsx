// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIdcZQ4wj1MzMUZUoc8DkHqfXdVfrvO1I",
  authDomain: "testing-notications.firebaseapp.com",
  projectId: "testing-notications",
  storageBucket: "testing-notications.appspot.com",
  messagingSenderId: "95654281130",
  appId: "1:95654281130:web:93518464b477df93e0b5d3",
  measurementId: "G-QHS5JFLLK1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
