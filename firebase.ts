// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD43T9ir5Cp6W6ZSYjQL3HxPDcgr7b90tI",
    authDomain: "netflix-clone-465f4.firebaseapp.com",
    projectId: "netflix-clone-465f4",
    storageBucket: "netflix-clone-465f4.appspot.com",
    messagingSenderId: "703739583947",
    appId: "1:703739583947:web:4507278a82e93771452a4e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :  getApp();
const db = getFirestore();
const auth = getAuth();

export default app
export{ auth, db};
