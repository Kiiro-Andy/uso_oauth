
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDAy73JPDr_PUahgO8nx92DmkRyTXY7e3k",
  authDomain: "oauthyreact.firebaseapp.com",
  projectId: "oauthyreact",
  storageBucket: "oauthyreact.appspot.com",
  messagingSenderId: "1033015732140",
  appId: "1:1033015732140:web:b4b2e38b01266beb4bbc09",
  measurementId: "G-586CNZ75B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)