// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk7IUk_yDkeWTwf13oVWnJcyX7Dig2sAc",
  authDomain: "web-develpment-2d1b2.firebaseapp.com",
  projectId: "web-develpment-2d1b2",
  storageBucket: "web-develpment-2d1b2.firebasestorage.app",
  messagingSenderId: "823997969478",
  appId: "1:823997969478:web:0881aa2244030505c38647",
  measurementId: "G-3E9LCVK9TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);