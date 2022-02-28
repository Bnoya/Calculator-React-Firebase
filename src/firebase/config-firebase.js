import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBi6d73c-UhxUiqljsaj5FHbBUk9x04Fl8",
    authDomain: "crud-react-f3b89.firebaseapp.com",
    projectId: "crud-react-f3b89",
    storageBucket: "crud-react-f3b89.appspot.com",
    messagingSenderId: "288898922588",
    appId: "1:288898922588:web:1812c5c510b95c36d7ce99"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, db, googleAuthProvider};