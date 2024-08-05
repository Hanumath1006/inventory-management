// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLGBdT4bvyN8477egdIfm6s6BrsIGKPfQ",
  authDomain: "inventory-management-2ae36.firebaseapp.com",
  projectId: "inventory-management-2ae36",
  storageBucket: "inventory-management-2ae36.appspot.com",
  messagingSenderId: "708942453439",
  appId: "1:708942453439:web:e7b1ac8fbbc24f0c94840a",
  measurementId: "G-CQ4FT7LB89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };
