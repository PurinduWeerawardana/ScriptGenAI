import Navbar from "../components/NavBar";
import blob from "../static/images/blob.png";
import UploadCard from "../components/UploadCard";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../firebase-config";
import { useEffect } from "react";

export default function Upload() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkCurrentUser = async () => {
      const user = await getCurrentUser();
      if (user) {
        console.log(user);
      } else {
        console.log(user);
        navigate("/login");
      }
    };

    checkCurrentUser().then();
  }, [navigate]);

  return (
    <div className="upload">
      <Navbar>
        <user className="displayName"></user>
        displayName
      </Navbar>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="left-up">
        <h1 className="text-center my-4 text-xl text-deep-purple-600 font-sans font-bold">
          Hi
        </h1>
        <h1 className="text-center my-4 text-xl text-deep-purple-600 font-sans font-bold">
          Explore the magic of ScriptGenAI
        </h1>
      </div>

      <div className="content grid gap-4 grid-cols-2 w-11/12 my-44 mx-24">
        <div className="left my-auto">
          <h1 className="text-left text-4xl sm:text-4xl text-indigo-900 font-sans font-semibold">
            Upload your presentation slide deck and generate an informative
            script
          </h1>
          <h1 className="text-left my-4 text-lg text-indigo-900">
            ScriptGenAI that allows presenters to upload a slide deck and
            generate a complete script to deliver an excellent presentation out
            of it. The application allows users to import a slide deck. Then it
            will display a preview of the slides. Users can add extra points
            slide by slide. These extra points are not specified in the slides
            but need to be added to the script.
          </h1>
        </div>

        <div className="right my -0">
          <UploadCard></UploadCard>
        </div>
      </div>
    </div>
  );
}
