// import { seedDatabase } from '../seed';
const config = {
    apiKey: "AIzaSyCnLVFRAmqrCOw1Pb2hJksm1vhV_hz_INM",
    authDomain: "instagram-dddb8.firebaseapp.com",
    projectId: "instagram-dddb8",
    storageBucket: "instagram-dddb8.appspot.com",
    messagingSenderId: "963158196785",
    appId: "1:963158196785:web:fbcad7bd381a36f062cb10"
}

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

// seedDatabase(firebase);

export { firebase, FieldValue };