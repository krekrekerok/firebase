// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAChKJw_5CKsBftwP_qPGoeAyn-JX4Leko",
  authDomain: "fir-lesson-c6417.firebaseapp.com",
  projectId: "fir-lesson-c6417",
  storageBucket: "fir-lesson-c6417.appspot.com",
  messagingSenderId: "684364949169",
  appId: "1:684364949169:web:3f2f6d680cc5a16923a490",
  measurementId: "G-3MTWD642ZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const firestore = getFirestore(app)