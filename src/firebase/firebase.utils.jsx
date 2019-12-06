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

  export const createUserProfileDocument = async (userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = (firestore.doc(`users/${userAuth.uid}`))


    const snapShot = await userRef.get()


    console.log(snapShot);

    if(!snapShot.exists){
      const {displayName , email} = userAuth;
      const createAt = new Date();

      try {
          await userRef.set({displayName , email ,createAt , ...additionalData})
      } catch (error){
        console.log('error creating a user ' + error.message)
      }

    }
    return userRef;
  } 

  firebase.initializeApp(config);


  export const addCollectionAndDocuments = async (collectionKey , objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    // console.log(collectionRef);

    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc(obj.title);
      batch.set(newDocRef, obj);      
    });

   return await batch.commit()
  }
  export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc =>
      {
        const {items , title} = doc.data();

        return {
          routeName: encodeURI(title.toLowerCase()),
          id:doc.id,
          title,
          items
        }
      })
      return transformedCollection.reduce((accumulator , collection) =>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {})
  }


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;