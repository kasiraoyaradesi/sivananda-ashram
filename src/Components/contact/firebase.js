import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC36oouKRf58RxtEnghZIfnLP5TGyWVnl8",
    authDomain: "ashram-45ffe.firebaseapp.com",
    projectId: "ashram-45ffe",
    storageBucket: "ashram-45ffe.appspot.com",
    messagingSenderId: "832193512931",
    appId: "1:832193512931:web:0f7e7ac972aaf06d78ccd6",
    measurementId: "G-FD4LZZN8KT"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // Initialize Firebase
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };