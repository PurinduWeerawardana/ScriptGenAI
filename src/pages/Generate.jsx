import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import preview from "../static/images/preview.jpg";
import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Generate() {
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const prompt =
      "Write a presentation script ->\nH1: Lecture 01 – Outline\nP1: DB, DBMS, DB Applications & DB System\nP1: Conceptual, logical & physical design\nP1: Conceptual design & ER modelling\nP1: Components of an ER Model\n\tSP1: Entities\n\tSP1: Multiplicities\n\tSP1: Relationships\n\tSP1: Attributes\nP1: Diagrammatic techniques, UML notations\nP1: Complex\nrelationships\n";
    const response = await fetch(
      `https://api.openai.com/v1/engines/text-davinci-003/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: prompt,
          temperature: 0.7,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          max_tokens: 200,
          n: 1,
        }),
      }
    );
    const json = await response.json();
    setGeneratedScript(json.choices[0].text);
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
