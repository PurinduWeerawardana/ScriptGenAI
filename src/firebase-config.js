import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAs3dSZySiNa5yCY2MSqvmCVKexMTSxQ3E",
  authDomain: "sdgp-squadr.firebaseapp.com",
  projectId: "sdgp-squadr",
  storageBucket: "sdgp-squadr.appspot.com",
  messagingSenderId: "411601539731",
  appId: "1:411601539731:web:8f9e7ca228e25575663366",
  measurementId: "G-N48LSP4X4J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// google authentication using firebase
const googleprovider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  const userCred = await signInWithPopup(auth, googleprovider);
  return userCred.user;
};

export const getCurrentUser = async () => {
  const promisifiedOnAuthStateChanged = (auth) => {
    return new Promise((resolve, reject) => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          resolve(null);
        }
      });
    });
  };
  const user = await promisifiedOnAuthStateChanged(auth);
  return user;
};

export const signOutUser = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

//facebook authentication using firebase
const facebookprovider = new FacebookAuthProvider();
export const signInWithFacebook = () => {
  signInWithPopup(auth, facebookprovider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};

