import Navbar from "../components/NavBar";
import { Button, Input } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInWithGoogle } from "../firebase-config";
import { signInWithFacebook } from "../firebase-config";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <div className="upload">
      <Navbar></Navbar>
      <div className="blob">
        <img src={blob} alt="" />
      </div>
      <div className="content grid gap-4 grid-cols-2 w-10/12 my-32 mx-auto">
        <div className="left my-auto">
          <img src={illustration} alt="" className="w-9/12 m-auto" />
        </div>
        <div className="right">
          <h1 className="text-left text-4xl sm:text-4xl font-sans font-semibold mb-4">
            Sign<span className="text-textPurple"> Up</span>
          </h1>
          <div className="flex w-10/12 flex-col gap-6">
            <Input size="lg" color="indigo" label="Name" />
            <Input size="lg" color="indigo" label="Email Address" />
            <Input size="lg" color="indigo" label="Password" type="password" />
            <Input
              size="lg"
              color="indigo"
              label="Confirm Password"
              type="password"
            />
            <Button color="deep-purple" size="lg" block>
              Create Account
            </Button>
            <div id="social-login">
              <p className="text-center text-sm underline">
                Already have an account? Log In
              </p>

              <div className="flex flex-row-3 justify-around">
                <div className="bg-[#EDEDED] w-[77px] h-[72px] flex justify-center items-center rounded-[30px] hover:bg-white hover:border hover:border-indigo-300">
                  <FcGoogle onClick={signInWithGoogle} size={30} />
                </div>

                <div className="bg-[#EDEDED] w-[77px] h-[72px] flex justify-center items-center rounded-[30px] hover:bg-white hover:border hover:border-indigo-300">
                  <BsFacebook
                    onClick={signInWithFacebook}
                    size={30}
                    color={"blue"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row-3 justify-between text-textPurple">
              <Button
                variant="gradient"
                color="deep-purple"
                size="md"
                className="bg-indigo-900 text-white font-bold py-4 px-6 m-0 rounded-full"
                onClick={() => navigate("/privacypolicy")}
              >
                <p>Terms</p>
              </Button>
              <Button
                variant="gradient"
                color="deep-purple"
                size="md"
                className="bg-indigo-900 text-white font-bold py-4 px-6 m-0 rounded-full"
                onClick={() => navigate("/privacypolicy")}
              >
                <p>Privacy</p>
              </Button>
              <Button
                variant="gradient"
                color="deep-purple"
                size="md"
                className="bg-indigo-900 text-white font-bold py-4 px-6 m-0 rounded-full"
                onClick={() => navigate("/privacypolicy")}
              >
                <p>Security</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
