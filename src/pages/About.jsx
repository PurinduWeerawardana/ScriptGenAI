import "../styles/Home.css";
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

            <div className="header grid gap-3 grid-rows-60 w-full sm:w-4/6 md:w-2/3 mx-auto my-10">

                <h1 className="text-center text-4xl sm:text-6xl text-indigo-900 font-sans font-semibold">
                    About us
                </h1>
                <h1 className="text-center m-2 text-lg text-indigo-900">
                    People who don't conduct presentations regularly, find it difficult to conduct a presentation verbally with a slide deck. Lack of practice, less organized content within the speech, and linguistic errors are some of the reasons that presenters find it challenging to convey the proper idea that they need to deliver in a presentation. Undergraduate students who are doing presentations in different kinds of scenarios have a hard time making presentation speeches(scripts). The ScriptGenAI aims to assist with the mentioned problem by generating scripts and allowing users to modify their scripts in preparation for conducting presentations with confidence about the speech.
                    Graphs are a form of data visualization that are widely used to display information in a concise manner. It is commonly used in presentations. There are situations where presenters have to describe graphs covering all the important information. ScriptGenAI’s primary research is based on analyzing graphs within presentations and generating human-understandable natural language scripts, which is a technology that can be used in numerous other applications as well.
                    <br />
                    <br />
                    <h1 className="text-center text-4xl  text-indigo-900 font-sans font-semibold">
                    Our Team
                    </h1>
                </h1>
                    
    <section class="bg-indigo-100 dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="Images/Rajani1.png" alt="Rajani"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Rajani Sooriyaarachchi</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Front-End Developer</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">20210190 / w1867050</p>
              </div>
          </div> 


          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="Images/Purindu1.png" alt="Purindu"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Purindu Weerawardana</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Full Stack Developer.</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">20210379 / w1867462</p>
              </div>
          </div> 


          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="Images/Lakshan1.png" alt="Lakshan"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Lakshan Costa</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Backend Developer in AI.</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">20210418 / w1867568</p>
              </div>
          </div> 


          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="Images/Jairamanan1.png" alt="Jairamanan"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Jaiyramanan Vijayaalayan</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Marketing & Sale</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">20200276 / w1868420</p>
              </div>
          </div>


          <div class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class=" w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="Images/Shiwarne2.png" alt="Shiwarne"></img>
              </a>
              <div class="p-5">
                  <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Shiwarne Silva</a>
                  </h3>
                  <span class="text-gray-500 dark:text-gray-400">Passionate Tech Enthusiast.</span>
                  <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">20210059 / w1914619</p>
              </div>
          </div>  
      </div>
      </div>
      </section> 
      <div className="flex justify-center">
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
    </div>
    </div>        
    );
}