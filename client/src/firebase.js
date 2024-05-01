// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8f5f5.firebaseapp.com",
  projectId: "mern-blog-8f5f5",
  storageBucket: "mern-blog-8f5f5.appspot.com",
  messagingSenderId: "810756971353",
  appId: "1:810756971353:web:535ae6ef1510f17941ca48",
  measurementId: "G-BFLYLCLYJS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
