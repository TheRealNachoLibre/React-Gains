import firebase from 'firebase/app'; 
import "firebase/auth";
import "firebase/firestore";

const config = {  
    apiKey: "AIzaSyDAafAYuVRVGmFcovrXyA1BDOke8_JBugM",
    authDomain: "gains-and-losses.firebaseapp.com",
    databaseURL: "https://gains-and-losses.firebaseio.com",
    projectId: "gains-and-losses",
    storageBucket: "gains-and-losses.appspot.com",
    messagingSenderId: "395907679338",
    appId: "1:395907679338:web:722e7d3a9fb0375ca63613",
    measurementId: "G-FGT9KKB50K"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
 

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default config; 
