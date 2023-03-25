import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import PresentationViewer from "../components/PresentationViewer";
import { Button } from "@material-tailwind/react";
import TextLoader from "../components/TextLoader";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Generate() {
  const [generatedScript, setGeneratedScript] = useState("");
  const { state } = useLocation();
  const link = state.link;
  const generateScript = async (e) => {
    e.preventDefault();
    setGeneratedScript(
      <TextLoader lines={10} width={"100%"} height="10" lineHeight="h-2" />
    );
    const requestOptions = {
      method: "POST",
      headers: { link: link },
    };
    var responseCode = "";
    fetch(
      "https://scriptgenai.pythonanywhere.com/presentation",
      requestOptions
    ).then((response) => {
      console.log(response.status);
      responseCode = response.status;
      if (responseCode === 200) {
        setGeneratedScript("Script Generated");
      } else {
        setGeneratedScript("Script Generation Failed!");
      }
    });
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
          <div className="slide-preview-content w-3/12 mx-auto my-10">
            <PresentationViewer url={link} />
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
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
