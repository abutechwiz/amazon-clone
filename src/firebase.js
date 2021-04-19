import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDgOOSHnp5WXzw2UuRuMUNWF4ODq7zfIsw",
    authDomain: "clone-6986b.firebaseapp.com",
    projectId: "clone-6986b",
    storageBucket: "clone-6986b.appspot.com",
    messagingSenderId: "1056738623491",
    appId: "1:1056738623491:web:6e1bd01a24af3278ca8e36",
    measurementId: "G-SBEC2E0Q7X"
});


const auth = firebase.auth();

export {auth};