import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8yed7ORrE3eQkKcdzre5QGL37M74aBTw",
  authDomain: "time-tracking-nextjs13-5765c.firebaseapp.com",
  projectId: "time-tracking-nextjs13-5765c",
  storageBucket: "time-tracking-nextjs13-5765c.appspot.com",
  messagingSenderId: "114936363540",
  appId: "1:114936363540:web:eb751a2f4cf34498b90501",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

export const db = getFirestore(app);
