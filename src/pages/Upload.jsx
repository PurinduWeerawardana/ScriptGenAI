import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import UploadCard from "../components/UploadCard";

export default function Upload() {
  return (
    <div className="upload">
      <Navbar></Navbar>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="content grid gap-4 grid-cols-1 md:grid-cols-2 w-full md:w-11/12 my-8 md:my-44 mx-4 md:mx-24">
        <div className="left my-auto">
          <h1 className="text-left text-3xl md:text-4xl text-indigo-900 font-sans font-semibold">
            Upload your presentation slide deck and generate an informative script
          </h1>
          <h1 className="text-left my-4 text-base md:text-lg text-indigo-900">
            ScriptGenAI allows presenters to upload a slide deck and generate a complete script to deliver an excellent presentation. The application imports a slide deck and displays a preview of the slides. Users can add extra points slide by slide, which are not specified in the slides but need to be added to the script.
          </h1>
        </div>
        <div className="right">
          <UploadCard></UploadCard>
        </div>
      </div>
    </div>
  );
}