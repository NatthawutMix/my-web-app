import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOMTb6tkzcIxuNu1s797_l0pZIJNPmYcM",
    authDomain: "my-web-app-2734d.firebaseapp.com",
    projectId: "my-web-app-2734d",
    storageBucket: "my-web-app-2734d.appspot.com",
    messagingSenderId: "863981694922",
    appId: "1:863981694922:web:6318b3162a6b8fe0d9e933",
    measurementId: "G-T6X7L7L9H8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebaseApp.auth();

export { provider, auth };