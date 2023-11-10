
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByeVySPW-wPbwIb-cueX2JDyO4s1tQEPs",
  authDomain: "tridev-art.firebaseapp.com",
  projectId: "tridev-art",
  storageBucket: "tridev-art.appspot.com",
  messagingSenderId: "164963352454",
  appId: "1:164963352454:web:6f47d9228b45ca5bb2b607",
  measurementId: "G-1QSS11JR7K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);