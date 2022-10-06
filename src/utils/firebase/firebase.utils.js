import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup , 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut, 
  onAuthStateChanged,
} from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc, collection, writeBatch} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDTfuUdHnrWmQUSebfcJvybiqnvyKGQFuQ",
    authDomain: "meta-mars-db.firebaseapp.com",
    projectId: "meta-mars-db",
    storageBucket: "meta-mars-db.appspot.com",
    messagingSenderId: "446327056706",
    appId: "1:446327056706:web:c69910ac6033f9fd7e80db"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account",
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = collection(db, collectionKey)
  }

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
    ) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapShot = await getDoc(userDocRef);
    
  

  if (!userSnapShot.exists()){
    const { displayName, email }  = userAuth;
    const createdAt = new Date();
  
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
      ...additionalInformation,
    });
  } catch (error) {
       console.log('error creating the user', error.message);
  }
}

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password);
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {

  if(!email || !password) return;
  
  return await signInWithEmailAndPassword(auth, email, password);
};


export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)