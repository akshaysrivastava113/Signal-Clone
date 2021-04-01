import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDS4H35M11Qh6cCUvbBcs-x120accOXZDE",
    authDomain: "signal-clone-bcd06.firebaseapp.com",
    projectId: "signal-clone-bcd06",
    storageBucket: "signal-clone-bcd06.appspot.com",
    messagingSenderId: "679505558353",
    appId: "1:679505558353:web:86d05819f60aa1d4c0b170"
  };

  //Initializing app with config
  let app;
  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  } else {
      app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export {db, auth};