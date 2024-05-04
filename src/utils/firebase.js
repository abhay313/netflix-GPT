// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcSzQA0-wTrIxQP4ccKp658c67qb3RBtg",
  authDomain: "netflixgpt-ffaf5.firebaseapp.com",
  projectId: "netflixgpt-ffaf5",
  storageBucket: "netflixgpt-ffaf5.appspot.com",
  messagingSenderId: "1039390848281",
  appId: "1:1039390848281:web:f117495a5e1e530b5cc188",
  measurementId: "G-1KFXNX4TME",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
