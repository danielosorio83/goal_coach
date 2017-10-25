import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCXtUd0GFzUTADf3sSdb3gbnQc8DQJpjK0",
  authDomain: "goal-coach-e96c3.firebaseapp.com",
  databaseURL: "https://goal-coach-e96c3.firebaseio.com",
  projectId: "goal-coach-e96c3",
  storageBucket: "",
  messagingSenderId: "1069241031772"
};

export const firebaseApp = firebase.initializeApp(config);
