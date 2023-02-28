import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import PresentationViewer from "../components/PresentationViewer";
import { Button } from "@material-tailwind/react";
import TextLoader from "../components/TextLoader";
import { useState } from "react";

export default function Generate() {
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = async (e) => {
    e.preventDefault();
    setGeneratedScript(
      <TextLoader lines={10} width={"100%"} height="10" lineHeight="h-2" />
    );
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    const prompt =
      "Act as an undergraduate student. You have to make a script for presentation. Here are the points in the 3 slides. [S1: H1: Lecture 01 Outline\n P1: DB, DBMS, DB Applications & DB System\n P1: Conceptual, logical & physical design\n P1: Conceptual design & ER modelling\n P1: Components of an ER Model\n \tSP1: Entities\n \tSP1: Multiplicities\n \tSP1: Relationships\n \tSP1: Attributes\n P1: Diagrammatic techniques, UML notations\n P1: Complex relationships S2: H1: DB, DBMS, DB Applications & DB System\n P1: Database (DB)\n \tSP1: Shared collection of logically related data (& description)\n \tSP1: enables users to define, create maintain the DBrganization.\n P1: Database Management Systems (DBMS) Software\n \tSP1: enables users to define, create maintain the DB\n \tSP1: provides controlled access to this DB. e.g. Oracle, MS SQL Server, MySQL,SQLite, MongoDB, etc.\n P1: Database Application.\n \tSP1: Computer program that interacts with DB by issuing a request (typically SQL statement) to the DBMS. e.g. online retailing system, booking system, stock management system, electronic medical record, etc.\n P1: DATABASE SYSTEM = DB + DBMS + DB APPLICATIONS S3: H1: Essential concepts of ER modelling/n P1: Entity/n P1: Relationship/n P1: Attribute] Make a informative script to present it to a database lecturer as a undergraduate student for a viva. Make it fluent and proffessional.";
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
          max_tokens: 800,
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
          <div className="slide-preview-content w-3/12 mx-auto my-10">
            <PresentationViewer url="https://firebasestorage.googleapis.com/v0/b/sdgp-squadr.appspot.com/o/files%2FWorkInProgress.pptx?alt=media&token=0a056ffd-4a17-45f7-931e-33f86a27c373"/>
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
