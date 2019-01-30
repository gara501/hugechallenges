import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyC8B5elzTteXo0TjLaTbZnh6cFoqu4pXW0",
  authDomain: "huge-challenges.firebaseapp.com",
  databaseURL: "https://huge-challenges.firebaseio.com",
  projectId: "huge-challenges",
  storageBucket: "huge-challenges.appspot.com",
  messagingSenderId: "986563864201"
};
 
firebase.initializeApp(config);
 
export default firebase;