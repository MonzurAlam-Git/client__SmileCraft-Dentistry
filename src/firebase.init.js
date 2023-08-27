// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADwnAkyb27ejcJ3HBPbXsxD5SjBiZmXoY",
  authDomain: "doctorsportal-11797.firebaseapp.com",
  projectId: "doctorsportal-11797",
  storageBucket: "doctorsportal-11797.appspot.com",
  messagingSenderId: "985042430954",
  appId: "1:985042430954:web:9e16eed0edee67ecb12093",
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
