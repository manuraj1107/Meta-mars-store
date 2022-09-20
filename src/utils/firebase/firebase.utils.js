import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider } from 'firebase/auth';

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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
    prompt: "select_account"
  });

  export const auth = getAuth(firebaseApp);
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());
  

  // The snapshot allows us to check whether or not there is an instance of it that exists inside of our database And it also allows us to access the data.


  // What I want to do is I want to first check if user data exists. If it does, then I don't want to do anything.I just want to return back this user document reference.If the data does not exist though.So let's say if user data does not exist.So here, this is what happens if user data exists, if user data does not exist.What I want to do is I want to create slash set the document with the data from user in my collection and I want to set it using this user snapshot because remember, it's already pointing to a specific place in a collection for the data that we want.

  // if user data exist, it return true or else false

  if(!userSnapShot.exists()){

    const {displayName, email}  = userAuth;
    const createdAt = new Date();
  

  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt
    })
  } catch (error) {
       console.log('error creating the user', error.message);
  }
}

  return userDocRef;
}