import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCuvfP_4_eaLymI5ektdL4UJZ1JI23lGlk",
  authDomain: "gym-buddy-6214f.firebaseapp.com",
  databaseURL: "https://gym-buddy-6214f.firebaseio.com",
  projectId: "gym-buddy-6214f",
  storageBucket: "gym-buddy-6214f.appspot.com",
  messagingSenderId: "403477369978"
};

const firebaseApp = firebase.initializeApp(config)
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

//export firestore database
export default firebaseApp.firestore()
