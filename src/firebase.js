// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBYOMBtlp7UjOcar6bJeuBSI_r2QYBMsTM',
  authDomain: 'firechat-mohibk.firebaseapp.com',
  projectId: 'firechat-mohibk',
  storageBucket: 'firechat-mohibk.appspot.com',
  messagingSenderId: '879752481034',
  appId: '1:879752481034:web:9a1cd25ffcd56e09a652f3',
  measurementId: 'G-FVQYX8N7C7',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
