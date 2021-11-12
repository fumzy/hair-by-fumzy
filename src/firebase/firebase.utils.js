import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyDwG0tdZwW9ON8DtCiCVpUPzAQ0VuYbdO8",
  authDomain: "hairbyfumzy.firebaseapp.com",
  projectId: "hairbyfumzy",
  storageBucket: "hairbyfumzy.appspot.com",
  messagingSenderId: "885758173354",
  appId: "1:885758173354:web:aa7377e4940054042cb0d3",
  measurementId: "G-B1C4597KSK"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;