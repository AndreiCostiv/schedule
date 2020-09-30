import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBj774na70sz8QHPSD5hQBraF9uGMW9Sww",
    authDomain: "schedule-f4eee.firebaseapp.com",
    databaseURL: "https://schedule-f4eee.firebaseio.com",
    projectId: "schedule-f4eee",
    storageBucket: "schedule-f4eee.appspot.com",
    messagingSenderId: "1058621003364",
    appId: "1:1058621003364:web:2627e01235b34e1bdc7171",
    measurementId: "G-DHS9BMF46H"
};

// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.database();

export {db}
export default firebase;