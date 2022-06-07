import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL53bm1lQsrVKCouVXNiSaC6jAmABa1HM",
    authDomain: "fidelleorona-web-5865d.firebaseapp.com",
    projectId: "fidelleorona-web-5865d",
    storageBucket: "fidelleorona-web-5865d.appspot.com",
    messagingSenderId: "809431958942",
    appId: "1:809431958942:web:9c8d46cf2aa0791280828f",
    measurementId: "G-ZEHGFJJGE9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
