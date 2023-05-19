import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyB6LgZ1MZTiYwKFYh3_6y9OOwg1uBxSVfo",
  authDomain: "e-bike-d3707.firebaseapp.com",
  projectId: "e-bike-d3707",
  storageBucket: "e-bike-d3707.appspot.com",
  messagingSenderId: "808769988028",
  appId: "1:808769988028:web:1480de5911cf68d96877b9"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
