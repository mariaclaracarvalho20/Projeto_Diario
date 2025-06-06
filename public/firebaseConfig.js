// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPl-srmPiWmAzA6OuXyCsUdts8B6ipCBM",
  authDomain: "diario-55359.firebaseapp.com",
  projectId: "diario-55359",
  storageBucket: "diario-55359.firebasestorage.app",
  messagingSenderId: "229362802589",
  appId: "1:229362802589:web:c3586269c128e4f4919974",
  measurementId: "G-71JDE9PP8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);