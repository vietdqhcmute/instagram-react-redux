import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAiUjnt1vKwPK7t6jK26cmv5tbDr6NtuVg",
  authDomain: "instagram-redux-clone.firebaseapp.com",
  databaseURL: "https://instagram-redux-clone.firebaseio.com",
  projectId: "instagram-redux-clone",
  storageBucket: "instagram-redux-clone.appspot.com",
  messagingSenderId: "854396970205",
  appId: "1:854396970205:web:f10e69dcd92919e3dc6734",
  measurementId: "G-9KTGSK891T"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default firebaseConfig;
