import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import preview from "../static/images/preview.jpg";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Generate() {
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = (e) => {
    setGeneratedScript("This is a generated script");
  };
  return (
    <div className="generate">
      <Navbar></Navbar>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="content grid grid-row-2 w-11/12 my-8 mx-auto">
        <div className="slide-preview my-auto">
          <h1 className="text-center text-4xl sm:text-4xl font-sans font-semibold">
            Generated Script
          </h1>
          <h1 className="text-center my-2 text-lg">NewPresentation.pptx</h1>
          <div className="slide-preview-content w-3/12 m-auto">
            <img
              src={preview}
              alt="Slide1"
              className="border-4 border-neutral-800 rounded-lg overflow-hidden"
            />
            <div className="text-center my-2 text-lg">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 inline mx-4 my-2"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="inline"> Slide 1 of 16</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 inline mx-4 my-2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="script text-center mx-auto bg-red w-10/12">
          <p className="generated-content">{generatedScript}</p>
          <div className="buttons flex justify-center my-4">
            <Button
              variant="gradient"
              color="deep-purple"
              size="md"
              className="hidden lg:inline-block px-8 m-2 rounded-full"
            >
              <span>Download</span>
            </Button>
            <Button
              variant="outlined"
              color="deep-purple"
              size="md"
              className="hidden lg:inline-block px-8 m-2 rounded-full"
              onClick={generateScript}
            >
              Re-Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
