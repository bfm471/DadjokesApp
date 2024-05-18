import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHCXqlEEFb2YyYb2DEduAQ54JaRhb1T2o",
  authDomain: "pilvi-react-3a6be.firebaseapp.com",
  projectId: "pilvi-react-3a6be",
  storageBucket: "pilvi-react-3a6be.appspot.com",
  messagingSenderId: "929865890216",
  appId: "1:929865890216:web:710def5fc4d742022dc59d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };