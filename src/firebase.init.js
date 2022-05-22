// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_API_KEY ,
//   authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
//   projectId:process.env.REACT_APP_PROJECT_ID ,
//   storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
//   messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
//   appId:process.env.REACT_APP_APP_ID ,
// };
const firebaseConfig = {
    apiKey: "AIzaSyDIGg377qSKgo3Tuw26KirfOdfmN8E7MSw",
    authDomain: "assaignment-12-21812.firebaseapp.com",
    projectId: "assaignment-12-21812",
    storageBucket: "assaignment-12-21812.appspot.com",
    messagingSenderId: "552638267267",
    appId: "1:552638267267:web:13c2ff420f805566f400b6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;