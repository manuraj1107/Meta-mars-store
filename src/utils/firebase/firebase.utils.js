import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup , GoogleAuthProvider } from 'firebase/auth';


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

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);