import "../styles/Home.css";
import Navbar from "../components/NavBar";
import { Button } from "@material-tailwind/react";
import illustration from "../static/images/home-illustration.png";
import blob from "../static/images/blob.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar></Navbar>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="header grid gap-3 grid-rows-60 w-4/6 sm:w-2/3 my-10 m-auto	">
        <h1 className="text-center text-base sm:text-xl text-deep-purple-600 uppercase font-sans font-bold">
          Get prepared for presentations easily
        </h1>
        <h1 className="text-center text-4xl sm:text-6xl text-indigo-900 font-sans font-semibold">
          We make informative script for your presentation slide deck
        </h1>
        <h1 className="text-center m-2 text-lg text-indigo-900">
          ScriptGenAI allows to upload a slide deck and generate
          <br /> a complete script to deliver an excellent presentation out of
          it.
        </h1>
        <div className="flex justify-center">
          <Button
            variant="gradient"
            color="deep-purple"
            size="md"
            className="bg-indigo-900 text-white font-bold py-4 px-6 m-2 rounded-full"
            onClick={() => navigate("/Login")}
            
          >
            <span>Get Started</span>
          </Button>
          <Button
            variant="outlined"
            color="deep-purple"
            size="md"
            className="font-bold py-4 px-6 m-2 rounded-full"
            onClick={() => navigate("/about")}
          >
            <span>Learn More</span>
          </Button>
        </div>
      </div>
      <div className="illustration m-auto w-3/4 sm:w-1/2">
        <img src={illustration} alt="" />
      </div>
    </div>
  );
}
