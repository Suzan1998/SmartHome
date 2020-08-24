import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import Firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDrxKgonBdLFWIeNSXDvFfPPynQXP6AiJo",
    authDomain: "ardu-a361a.firebaseapp.com",
    databaseURL: "https://ardu-a361a.firebaseio.com",
    projectId: "ardu-a361a",
    storageBucket: "ardu-a361a.appspot.com",
    messagingSenderId: "1096024222021",
    appId: "1:1096024222021:web:ad47c9d5e28eee46bc762c",
    measurementId: "G-B4C2GHM5BC"
  };
   const app = Firebase.initializeApp(firebaseConfig);
   export const db = app.database();
