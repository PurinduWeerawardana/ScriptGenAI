import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs3dSZySiNa5yCY2MSqvmCVKexMTSxQ3E",
  authDomain: "sdgp-squadr.firebaseapp.com",
  projectId: "sdgp-squadr",
  storageBucket: "sdgp-squadr.appspot.com",
  messagingSenderId: "411601539731",
  appId: "1:411601539731:web:8f9e7ca228e25575663366",
  measurementId: "G-N48LSP4X4J"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


const googleprovider=new GoogleAuthProvider()


export const signInWithGoogle=()=> {
    signInWithPopup(auth,googleprovider)
    .then((result)=>{
        

    })
    .catch((error)=>{
        console.log(error);
    });


    
};