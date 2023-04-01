import "../styles/about.css";
import Navbar from "../components/NavBar";
import { Button } from "@material-tailwind/react";

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
        <h1 className="text-center text-4xl sm:text-6xl text-indigo-900 font-sans font-semibold">
          About us
        </h1>
        <h1 className="text-center m-2 text-lg text-indigo-900">
          People who don't conduct presentations regularly, find it difficult to
          conduct a presentation verbally with a slide deck. Lack of practice,
          less organized content within the speech, and linguistic errors are
          some of the reasons that presenters find it challenging to convey the
          proper idea that they need to deliver in a presentation. Undergraduate
          students who are doing presentations in different kinds of scenarios
          have a hard time making presentation speeches(scripts). The
          ScriptGenAI aims to assist with the mentioned problem by generating
          scripts and allowing users to modify their scripts in preparation for
          conducting presentations with confidence about the speech. Graphs are
          a form of data visualization that are widely used to display
          information in a concise manner. It is commonly used in presentations.
          There are situations where presenters have to describe graphs covering
          all the important information. ScriptGenAI’s primary research is based
          on analyzing graphs within presentations and generating
          human-understandable natural language scripts, which is a technology
          that can be used in numerous other applications as well.
          <br />
          <br />
          <font size="6">
            <u>
              <b>Our Team</b>
            </u>
          </font>
          <br />
          ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <div class="person-rajani">
            <img
              src="Images/Rajani1.png"
              alt=""
              class="person-pic-rajani"
            ></img>
          </div>
          <div class="person-info-rajani">
            <h2>
              <b>
                <b>Rajani Randari</b>
              </b>
            </h2>
            <p>
              <b>
                <b>20210190 / w1867050</b>
              </b>
            </p>
          </div>
          <div class="person-purindu">
            <img
              src="Images/Purindu1.png"
              alt=""
              class="person-pic-purindu"
            ></img>
          </div>
          <div class="person-info-purindu">
            <h2>
              <b>
                <b>Purindu Thamash</b>
              </b>
            </h2>
            <p>
              <b>
                <b>20210379 / w1867462</b>
              </b>
            </p>
          </div>
          <div class="person-lakshan">
            <img
              src="Images/Lakshan1.png"
              alt=""
              class="person-pic-lakshan"
            ></img>
          </div>
          <div class="person-info-lakshan">
            <h2>
              <b>
                <b>Lakshan Costa</b>
              </b>
            </h2>
            <p>
              <b>
                <b>20210418 / w1867568</b>
              </b>
            </p>
          </div>
          <div class="person-jairamanan">
            <img
              src="Images/Jairamanan1.png"
              alt=""
              class="person-pic-jairamanan"
            ></img>
          </div>
          <div class="person-info-jairamanan">
            <h2>
              <b>
                <b>Jaiyramanan Vijayaalayan</b>
              </b>
            </h2>
            <p>
              <b>
                <b>20200276 / w1868420</b>
              </b>
            </p>
          </div>
          <div class="person-shiwarne">
            <img
              src="Images/Shiwarne2.png"
              alt=""
              class="person-pic-shiwarne"
            ></img>
          </div>
          <div class="person-info-shiwarne">
            <h2>
              <b>
                <b>Shiwarne Silva</b>
              </b>
            </h2>
            <p>
              <b>
                <b>20210059 / w1914619</b>
              </b>
            </p>
          </div>
          <div className="text-center">
            <Button
              variant="gradient"
              color="deep-purple"
              size="md"
              className="bg-indigo-900 text-white font-bold py-4 px-6 m-0 rounded-full"
              onClick={() => navigate("/")}
            >
              <span>Back to home</span>
            </Button>
          </div>
        </h1>
      </div>
    </div>
  );
}
