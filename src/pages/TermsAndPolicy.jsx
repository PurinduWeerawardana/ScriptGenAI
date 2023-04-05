import "../styles/root.css";
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
          Terms and Policy
        </h1>
        <h1 className="text-center m-2 text-lg text-indigo-900">
          Welcome to ScriptGenAI! We provide services to help you generate
          natural language summaries for your charts and presentations. By using
          our website or services, you agree to be bound by the following terms
          and policies:
          <br />
        </h1>

        <h2 className="text-lg text-indigo-900 my-6 mx-2">
          <b>Acceptance of Terms:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-2 mx-2">
          <b>
            <li>
              By accessing our website or using our services, you agree to be
              bound by these Terms and Policies, and all applicable laws and
              regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2">
          <b>Use of Services:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-2 mx-2">
          <b>
            <li>
              Our services are designed to assist you in generating natural
              language summaries for your charts and presentations. You agree to
              use our services only for lawful purposes and in accordance with
              these Terms and Policies.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Intellectual Property Rights:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              The content on our website, including but not limited to text,
              graphics, images, and software, is the property of ScriptGenAI and
              is protected by intellectual property laws. You are granted a
              limited license to use our services for personal or non-commercial
              use only.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Privacy Policy:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              Your privacy is important to us. We collect certain information
              from you in order to provide our services, such as your name,
              email address, and chart data. We will not share your information
              with any third parties without your consent.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Disclaimer of Warranties:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              ScriptGenAI makes no representations or warranties of any kind,
              express or implied, as to the operation of our website or the
              information, content, materials, or services provided. We do not
              guarantee the accuracy, completeness, or timeliness of any
              information on our website.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Limitation of Liability:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              In no event shall ScriptGenAI be liable for any damages
              (including, without limitation, damages for loss of data or
              profit, or due to business interruption) arising out of the use or
              inability to use our services, even if we have been notified of
              the possibility of such damages.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Changes to Terms and Policies:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              We reserve the right to update or modify these Terms and Policies
              at any time without prior notice. Your continued use of our
              website or services after any such changes constitutes your
              acceptance of the new Terms and Policies.
            </li>
          </b>
        </p>

        <h2 className="text-lg text-indigo-900 my-2 mx-2">
          <b>Governing Law:</b>
        </h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>
            <li>
              These Terms and Policies shall be governed and interpreted in
              accordance with the laws of the United States and the state of
              California, without giving effect to any principles of conflicts
              of law.
            </li>
          </b>
          <br />
        </p>

        <p className="text-justify text-lg text-gray-700 my-2 mx-2">
          <b>
            If you have any questions or concerns about these Terms and
            Policies, don't hesitate to{" "}
            <a href="about">
              <font color="#00008B">
                <u>contact us for your questions.</u>
              </font>
            </a>
          </b>
        </p>

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
