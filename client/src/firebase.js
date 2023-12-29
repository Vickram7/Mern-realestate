// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2aP6T8xNo61VMxOx9KkXG1hG9xmXDX3o",
  authDomain: "vickramestate.firebaseapp.com",
  projectId: "vickramestate",
  storageBucket: "vickramestate.appspot.com",
  messagingSenderId: "668473273846",
  appId: "1:668473273846:web:890a8b81bfbc69868d2bd7",
  measurementId: "G-SLK2EKJ3QD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);