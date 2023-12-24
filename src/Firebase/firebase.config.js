// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyDovxPCjFriXXEAa0HfBV4yUSWQ39HXMpI",
  //   authDomain: "task-management-2e23f.firebaseapp.com",
  //   projectId: "task-management-2e23f",
  //   storageBucket: "task-management-2e23f.appspot.com",
  //   messagingSenderId: "523538215400",
  //   appId: "1:523538215400:web:d8966300b8bc0d8debf45d",
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
