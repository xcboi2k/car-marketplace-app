import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD4unUe36aN6u7GZG8EumF61xz97qYS1W0",
    authDomain: "car-marketplace-app-77b59.firebaseapp.com",
    projectId: "car-marketplace-app-77b59",
    storageBucket: "car-marketplace-app-77b59.appspot.com",
    messagingSenderId: "871054937366",
    appId: "1:871054937366:web:3adfa45ed65be750ec9437"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);