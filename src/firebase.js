import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTWpT_jb0Rw_Hm0m3p2kyBqwESkQa5iAo",
  authDomain: "chess-react-93919.firebaseapp.com",
  projectId: "chess-react-93919",
  storageBucket: "chess-react-93919.appspot.com",
  messagingSenderId: "1081855248794",
  appId: "1:1081855248794:web:a7756c6230a45446e2d223",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
