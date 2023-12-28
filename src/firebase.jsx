// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtZGXT3z_GBBv-cuGCM5QfJzdmKX9uHJ8",
  authDomain: "ezewin-d7515.firebaseapp.com",
  projectId: "ezewin-d7515",
  storageBucket: "ezewin-d7515.appspot.com",
  messagingSenderId: "546638602432",
  appId: "1:546638602432:web:21c03a619b7db6f4650d25",
  measurementId: "G-GSX15T2T0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);