import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD58oi4ag7I_PVBgGzm33BPFDBGIBXBo44",
  authDomain: "miniblog-176ef.firebaseapp.com",
  projectId: "miniblog-176ef",
  storageBucket: "miniblog-176ef.appspot.com",
  messagingSenderId: "183119178510",
  appId: "1:183119178510:web:4831d17492f4fb58da455f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
