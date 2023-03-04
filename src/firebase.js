import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpSH8V9GDUzw2DGrsgz4syZBLb4c_HPJs",
  authDomain: "realtor-a5f95.firebaseapp.com",
  projectId: "realtor-a5f95",
  storageBucket: "realtor-a5f95.appspot.com",
  messagingSenderId: "135131035506",
  appId: "1:135131035506:web:299ddb2f8e772679d5cfeb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
