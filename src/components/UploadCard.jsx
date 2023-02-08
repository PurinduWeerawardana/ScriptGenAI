import React from "react";
import {
  Card,
  Button
} from "@material-tailwind/react";
import uploadIcon from "../static/images/upload-icon.png";
import { initializeApp, storage } from "firebase/app";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAtMg9AKj4zJ8kOgC5IfvPAmGj-H3COEnc",
  authDomain: "scriptgenai-fileupload.firebaseapp.com",
  projectId: "scriptgenai-fileupload",
  storageBucket: "scriptgenai-fileupload.appspot.com",
  messagingSenderId: "436136312576",
  appId: "1:436136312576:web:cfd9a8cf23913be5bc3de5",
  measurementId: "G-JF996FE3GB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

class UploadCard extends React.Component {
  state = {
    file: null,
    errors: [],
    uploadState: null,
    progress: 0
  };

  fileInputRef = React.createRef();

  addFile = event => {
    const file = event.target.files[0];
    if (file) {
      this.setState({ file });
    }
  };

  handleUpload = () => {
    const { file } = this.state;
    const storageRef = storage().ref();
    const fileRef = storageRef.child(`pptx/${file.name}`);
    const task = fileRef.put(file);

    task.on(
      "state_changed",
      snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({ progress });
      },
      error => {
        this.setState({ errors: this.state.errors.concat(error) });
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.setState({ uploadState: "success", downloadURL });
        });
      }
    );
  };

  openFilePicker = () => {
    this.fileInputRef.current.click();
  };

  render() {
    return (
      <Card className="w-9/12 h-96 m-auto">
        <Card className="bg-lightPurple m-6 h-full">
          <img src={uploadIcon} alt="" className="w-24 m-auto" />
          {this.state.file && (
            <div>
              <p>{this.state.file.name}</p>
              <progress value={this.state.progress} max="200" />
            </div>
          )}
          {this.state.uploadState === "success" && (
            <p>File uploaded successfully!</p>
          )}
          {this.state.errors.length > 0 && (
            <p>Errors: {this.state.errors.join(", ")}</p>
          )}

           {/* Render the upload progress if the state is set */}
          {this.state.uploadState === "uploading" && (
            <p>Upload Progress: {this.state.uploadProgress}%</p>
          )
          }

            {/* Render a success message if the upload is complete */}
          {this.state.uploadState === "complete" && (
            <p>Upload Complete!</p>
          )
          }

          <Button
            variant="gradient"
            color="deep-purple"
            size="md"
            className="mb-6 mx-10 rounded-full"
            onClick={() => this.uploadFile()}
          >
            <input type="file" onChange={this.addFile} />
            <span>Upload</span>
          </Button>
        </Card>
      </Card>
    );
  }
}

export default UploadCard;

