import * as firebase from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "test-suites-pegination.firebaseapp.com",
  projectId: "test-suites-pegination",
  storageBucket: "test-suites-pegination.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID
};

export const app = firebase.initializeApp(firebaseConfig)

export const db = getFirestore(app);

// Initialize Firebase
export default firebaseConfig;