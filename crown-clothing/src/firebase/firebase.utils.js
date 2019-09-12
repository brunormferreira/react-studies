import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBArDDFtt3IFCvVYChtkSoAD2Fw-rKxidg",
  authDomain: "crwn-db-a4b7b.firebaseapp.com",
  databaseURL: "https://crwn-db-a4b7b.firebaseio.com",
  projectId: "crwn-db-a4b7b",
  storageBucket: "",
  messagingSenderId: "1095509079790",
  appId: "1:1095509079790:web:e53cd35e0237d927d9a5ff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
