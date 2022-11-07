import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCYUQOkNtzRSDi0NJnVdhg9uSHfqSb2-qE",
  authDomain: "dropzone-85813.firebaseapp.com",
  projectId: "dropzone-85813",
  storageBucket: "dropzone-85813.appspot.com",
  messagingSenderId: "415567440410",
  appId: "1:415567440410:web:99c93ba473c120776fffa3",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
