import firebase from "firebase";

//replace the folling 9 lines with the firebaseConfig variable
//issued to you during setup by firebase
const firebaseConfig = {
  apiKey: "AIzaSyCaSnRtZuakZOMwrqg4HXclnWS7BpZjVbU",
  authDomain: "jersey-designer-app.firebaseapp.com",
  projectId: "jersey-designer-app",
  storageBucket: "jersey-designer-app.firebasestorage.app",
  messagingSenderId: "541819927059",
  appId: "1:541819927059:web:57f29c81ddf87093ad1de6",
  measurementId: "G-23FZQMHYS8"
};

let app;

if(!firebase.apps.length){
  alert("initialising");
  app = firebase.initializeApp(firebaseConfig);
}
else {
  alert("app length " + firebase.apps.length)
}

const db = firebase.firestore();

export {db};
