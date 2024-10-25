// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fsd-mern-blog.firebaseapp.com",
  projectId: "fsd-mern-blog",
  storageBucket: "fsd-mern-blog.appspot.com",
  messagingSenderId: "894147484156",
  appId: "1:894147484156:web:4d594f9a9efd7d84aaba79",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
