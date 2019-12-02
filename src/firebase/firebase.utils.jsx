import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


   const config = {
    apiKey: "AIzaSyCCDeOndrBtnsHfHCLFFu45AfFewRJNScE",
    authDomain: "commerce-bbb85.firebaseapp.com",
    databaseURL: "https://commerce-bbb85.firebaseio.com",
    projectId: "commerce-bbb85",
    storageBucket: "commerce-bbb85.appspot.com",
    messagingSenderId: "562333787147",
    appId: "1:562333787147:web:f715c94e907a54c527d30e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;