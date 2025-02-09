// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRegRWLntJtUcraefpTSzOJdc1GTkxfdY",
  authDomain: "car-doctor-e6c18.firebaseapp.com",
  projectId: "car-doctor-e6c18",
  storageBucket: "car-doctor-e6c18.firebasestorage.app",
  messagingSenderId: "795977894949",
  appId: "1:795977894949:web:5a6c68e41b21d6380f03cc"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app