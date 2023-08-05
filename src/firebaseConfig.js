// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCtwB2x3sNC-6qQI6YbIWc99aDiqX5IGE",
    authDomain: "e-comerce-matelandia-nz.firebaseapp.com",
    projectId: "e-comerce-matelandia-nz",
    storageBucket: "e-comerce-matelandia-nz.appspot.com",
    messagingSenderId: "487652870126",
    appId: "1:487652870126:web:517df8ba0299715d3f30ff"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDatos = getFirestore(app) 