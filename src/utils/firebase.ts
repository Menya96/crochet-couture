// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPO2VtB4RYZFzohFY9-mMiMahX9Dgdq-w",
  authDomain: "crochet-couture.firebaseapp.com",
  projectId: "crochet-couture",
  storageBucket: "crochet-couture.appspot.com",
  messagingSenderId: "459783652496",
  appId: "1:459783652496:web:88dfd71bc9d8e800210415",
  measurementId: "G-MWHRQKGWJ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Export Auth module
export const auth = getAuth(app);

// Dynamically import and initialize Analytics only on the client-side
if (typeof window !== 'undefined') {
  import('firebase/analytics')
    .then(({ getAnalytics }) => {
      getAnalytics(app);
    })
    .catch((err) => console.error('Failed to load Firebase Analytics', err));
}