// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


import { getMessaging } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optiona


// // main
const firebaseConfig = {
  apiKey: "AIzaSyAtZGXT3z_GBBv-cuGCM5QfJzdmKX9uHJ8",
  authDomain: "ezewin-d7515.firebaseapp.com",
  projectId: "ezewin-d7515",
  storageBucket: "ezewin-d7515.appspot.com",
  messagingSenderId: "546638602432",
  appId: "1:546638602432:web:b97a27482a07df45650d25",
  measurementId: "G-WMTVM7TP3Z"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);
