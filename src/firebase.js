import { initializeApp } from 'firebase/app';

// firebase firestore functions
import { getFirestore, collection, getDocs, addDoc, doc, getDoc} from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration


//  fireebase storage functions
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyA2VpvdU-OngeoFPb5V00sZNs4HRT75e8o",
    authDomain: "vueonlinestore-5e0e1.firebaseapp.com",
    projectId: "vueonlinestore-5e0e1",
    storageBucket: "vueonlinestore-5e0e1.appspot.com",
    messagingSenderId: "724752431271",
    appId: "1:724752431271:web:ed1bba7d5c021fe65d0382"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export{app, db, collection, getDocs, getStorage, ref, uploadBytesResumable, getDownloadURL, addDoc, doc, getDoc}