import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7E4oCa3i9A1hqMBG7VP-NlJUwNHBRui0",
  authDomain: "employees-timesheet.firebaseapp.com",
  projectId: "employees-timesheet",
  storageBucket: "employees-timesheet.appspot.com",
  messagingSenderId: "457581140156",
  appId: "1:457581140156:web:34c291533be8884cca98b9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const authentication = getAuth(app);
