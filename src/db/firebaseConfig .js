// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5vxQvDOeLqzhmwA18ljvpTttQGBkTETo",
  authDomain: "smooth-1c13a.firebaseapp.com",
  projectId: "smooth-1c13a",
  storageBucket: "smooth-1c13a.appspot.com",
  messagingSenderId: "560011461851",
  appId: "1:560011461851:web:afd65052dcf42f4d6ef8fe",
  measurementId: "G-TV2MKL1K4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
