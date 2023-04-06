import { useState } from "react";
import { Card, Button, Progress, input } from "@material-tailwind/react";
import uploadIcon from "../static/images/upload-icon.png";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { useNavigate } from "react-router-dom";

const app = initializeApp({
  apiKey: "AIzaSyAs3dSZySiNa5yCY2MSqvmCVKexMTSxQ3E",
  authDomain: "sdgp-squadr.firebaseapp.com",
  projectId: "sdgp-squadr",
  storageBucket: "sdgp-squadr.appspot.com",
  messagingSenderId: "411601539731",
  appId: "1:411601539731:web:8f9e7ca228e25575663366",
  measurementId: "G-N48LSP4X4J",
});

const storage = getStorage(app);

function App() {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [percent, setPercent] = useState(0);

  // uploading state
  const [isUploading, setIsUploading] = useState(false);

  // Handle file upload event and update state
  function handleChange(event) {
    const selectedFile = event.target.files[0];
    if (
      selectedFile.type !==
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      alert("Please select a .pptx file!");
      setFile("");
    } else {
      setFile(selectedFile);
    }
  }

  const handleUpload = () => {
    if (!file) {
      alert("Please upload the Presentation Slides!");
    }

    setIsUploading(true); // Set isUploading to true when the upload starts

    const storageRef = ref(storage, `/files/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const percent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setPercent(percent);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          console.log(file.name);
          navigate("/generate", { state: { link: url, fileName: file.name } });
          setIsUploading(false); // Set isUploading to false when the upload is complete
        });
      }
    );
  };

  return (
    <div>
      <Card className="w-full sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 h-auto m-auto">
        <Card className="bg-lightPurple m-6 p-4 h-full">
          <p>{percent} % </p>

          <Progress
            value={percent}
            variant="gradient"
            color="deep-purple"
            size="md"
            className="w-full h-9 mb-4 bg-gray-200 rounded-full dark:bg-gray-700 shadow-xl "
          />

          <img
            src={uploadIcon}
            alt=""
            className="w-24 m-auto"
            onClick={input}
          />
          <div className="text-center">
            <label
              htmlFor="pptx-file"
              className="block text-gray-700 font-bold mb-2"
            >
              Please select a PPTX file:
            </label>

            <input
              type="file"
              id="pptx-file"
              className="mb-8 mx-8"
              onChange={handleChange}
              accept=".pptx"
              style={{
                backgroundColor: "#F3F4F6",
                color: "#6B7280",
                padding: "15px 70px",
                boxShadow: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
              }}
            />
          </div>

          <Button
            onClick={handleUpload}
            variant="gradient"
            color="deep-purple"
            size="md"
            className="mb-6 mx-10 rounded-full"
            disabled={isUploading} // Disable the button if isUploading is true
          >
            <span>Upload</span>
         

          </Button>
        </Card>
      </Card>
    </div>
  );
}

export default App;
