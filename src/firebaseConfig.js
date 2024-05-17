// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHCXqlEEFb2YyYb2DEduAQ54JaRhb1T2o",
  authDomain: "pilvi-react-3a6be.firebaseapp.com",
  projectId: "pilvi-react-3a6be",
  storageBucket: "pilvi-react-3a6be.appspot.com",
  messagingSenderId: "929865890216",
  appId: "1:929865890216:web:710def5fc4d742022dc59d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };