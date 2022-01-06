import { getApps, initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// 初期化
const apps = getApps
if (!apps.length) {
  initializeApp(firebaseConfig)
}
export const auth = getAuth();
export const db = getFirestore();
const provider = new GoogleAuthProvider();

// GoogleLogin
export const googleLogin = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log("🚀 ~ file: firebase.ts ~ line 30 ~ .then ~ user", user)
  }).catch((error) => {
    const errorMessage = error.message;
    console.log("🚀 ~ file: firebase.ts ~ line 33 ~ .then ~ errorMessage", errorMessage)
  });
}

// logout
export const googleLogout = () => {
  signOut(auth).then(() => {
    console.log("🚀 ~ file: firebase.ts ~ line 40 ~ signOut ~ bye!")
  }).catch((error) => {
  console.log("🚀 ~ file: firebase.ts ~ line 42 ~ signOut ~ error", error)
});
}