import { useState } from "react";
import {
  Card,
  Button,Progress
} from "@material-tailwind/react";
import uploadIcon from "../static/images/upload-icon.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: "AIzaSyAs3dSZySiNa5yCY2MSqvmCVKexMTSxQ3E",
  authDomain: "sdgp-squadr.firebaseapp.com",
  projectId: "sdgp-squadr",
  storageBucket: "sdgp-squadr.appspot.com",
  messagingSenderId: "411601539731",
  appId: "1:411601539731:web:8f9e7ca228e25575663366",
  measurementId: "G-N48LSP4X4J"
});

const storage = getStorage(app);

function App() {
  // State to store uploaded file
  const [file, setFile] = useState("");

  // progress
  const [percent, setPercent] = useState(0);

  // Handle file upload event and update state
  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload an image first!");
    }

    const storageRef = ref(storage, `/files/${file.name}`);

    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        // update progress
        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };

  return (
    <div>
      <Card className="w-9/12 h-96 m-auto">
        <Card className="bg-lightPurple m-6 h-full">
          <img src={uploadIcon} alt="" className="w-24 m-auto" />
          <input type="file" size="md" className="mb-4 mx-10 rounded-full" onChange={handleChange} accept="/image/*" />

          <p >{percent} % done</p>
          
          <Progress value={percent}  variant="gradient" color="deep-purple"  size="md"  className="w-full h-7 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 shadow-xl "  />
      
                
          <Button
            onClick={handleUpload}
            variant="gradient"
            color="deep-purple"
            size="md"
            className="mb-6 mx-10 rounded-full"
          >
            <span>Upload</span>
          </Button>

        </Card>
      </Card>
    </div>
  );
}

export default App;