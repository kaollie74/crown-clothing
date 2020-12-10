import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"; // give us access to the auth methods

const config = {
  apiKey: "AIzaSyA_WRfsehzKfiDDXwf4o8QkfrYiAcDlf9o",
  authDomain: "crown-db-5a5ba.firebaseapp.com",
  databaseURL: "https://crown-db-5a5ba.firebaseio.com",
  projectId: "crown-db-5a5ba",
  storageBucket: "crown-db-5a5ba.appspot.com",
  messagingSenderId: "390261178872",
  appId: "1:390261178872:web:d14c77562c53ebe347560d",
  measurementId: "G-894PSGNR5Z",
};

export const createUserProfileDocument = async (
  userAuth,
  additionionalData
) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } // end if

  return userRef;
};

// make new collections and documents in fire store.
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    console.log("newDocRef", newDocRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}; // end addCollectionAndDocuments;

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((docObj) => {
    const { title, items } = docObj.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docObj.id,
      title,
      items
    }
  });

  /**
   * we transformedCollection returns an array of objs. 
   * ie => [{...}, {...}, {...}, etc...]
   * we will run .reduce()
   * to convert it to an obj of objs by setting the title prop as the key
   * ie {
   * hats:{...},
   * womens:{...},
   * etc.....
   * }
   */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator; 
  }, {})

  console.log('Transformed Collection ::::', transformedCollection); 
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" }); // this will give the prompt on the UI for google authentication

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
