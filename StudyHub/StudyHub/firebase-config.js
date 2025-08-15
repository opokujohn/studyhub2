// Firebase configuration
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyA8085NOtP-5h_IpE8MKd7zSLEfWhem8hI",
    authDomain: "studyhub-364fc.firebaseapp.com",
    projectId: "studyhub-364fc",
    storageBucket: "studyhub-364fc.appspot.com",
    messagingSenderId: "458538407787",
    appId: "1:458538407787:web:868ebc4f5970fab220de2e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);