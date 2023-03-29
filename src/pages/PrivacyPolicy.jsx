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
        
      <div className="header grid gap-3 grid-rows-60 w-4/6 sm:w-2/3 my-10 m-auto">
        <h1 className="text-center text-4xl sm:text-6xl text-indigo-900 font-sans font-semibold">
          Privacy Policy
        </h1>
        <h1 className="text-center m-2 text-lg text-indigo-900">
        <b>Privacy Policy for ScriptGenAI</b>
        </h1>
        <p className="text-center text-lg text-gray-700 my-6 mx-2">
          <b>At ScriptGenAI, we are committed to protecting the privacy and security
          of our users. This Privacy Policy outlines the types of information we
          collect, how we use it, and how we protect it. By using our website and
          services, you agree to the terms of this Privacy Policy.</b>
        </p>
        <div className="privacy-container overflow-y-auto border-2 border-indigo-200">

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>Information We Collect</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>We collect information that you provide to us when you sign up for our
          services, such as your name, email address, and payment information. We
          also collect information about your use of our website and services,
          such as your IP address, browser type, and device information.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>How We Use Your Information</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>We use your information to provide you with our services, to
          communicate with you about your account, and to improve our website and
          services. We may also use your information to send you marketing and
          promotional materials, but you may opt-out of receiving these
          communications at any time.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>How We Protect Your Information</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>We use industry-standard security measures to protect your information
          from unauthorized access, disclosure, or alteration. We also limit
          access to your information to only those employees who need it to
          perform their job functions.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>Sharing Your Information</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
          <b>We do not share your information with third parties except as necessary
          to provide our services or as required by law. We may share your
          information with our service providers, such as payment processors or
          hosting providers, but only to the extent necessary to provide our
          services.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>Your Rights</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
            <b>You have the right to access, correct, or delete your personal information at any time. You may also object to the processing of your personal information or request that we restrict the processing of your personal information. To exercise these rights, please contact us using the information provided below.
            We do not share your information with third parties except as necessary
            to provide our services or as required by law. We may share your
            information with our service providers, such as payment processors or
            hosting providers, but only to the extent necessary to provide our
            services.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>Changes to this Privacy Policy</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
            <b>We may update this Privacy Policy from time to time. If we make any material 
            changes, we will notify you by email or by posting a notice on our website. 
            Your continued use of our website and services after any changes to this 
            Privacy Policy constitutes your acceptance of the updated terms.</b>
        </p>

        <h2 className="text-lg text-indigo-900 my-6 mx-2"><b>Contact Us</b></h2>
        <p className="text-justify text-lg text-gray-700 my-6 mx-2">
            <b>If you have any questions about this Privacy Policy or our practices, 
            please <a href="about"><font color ="#00008B"><u>contact us;</u></font></a>   
                                 <br/>Rajani Soriyaarachchi     - <font color ="indigo" size="3"><u><a href ="about">rajani.20210190@iit.ac.lk</a></u></font>
                                 <br/>Lakshan Costa             - <font color ="indigo" size="3"><u><a href ="about">dinujaya.20210418@iit.ac.lk</a></u></font>
                                 <br/>Purimdu Weerawardana      - <font color ="indigo" size="3"><u><a href ="about">Purindu.20210379@iit.ac.lk</a></u></font>
                                 <br/>Jaiyramanan Vijayaalayan  - <font color ="indigo" size="3"><u><a href ="about">vijayaalayan.20200276@iit.ac.lk</a></u></font>
                                 <br/>Shiwarne Silva            - <font color ="indigo" size="3"><u><a href ="about">shiwarne.20210059@iit.ac.lk</a></u></font></b>
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
        </div>
    </div>
    
  );
}