import Navbar from "../components/NavBar";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInWithGoogle } from "../firebase-config";
import { signInWithFacebook } from "../firebase-config";

export default function Login() {
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
            Log<span className="text-textPurple"> In</span>
          </h1>
          <div className="flex w-10/12 flex-col gap-6">
            <Input
              size="lg"
              color="indigo"
              label="Username or E-mail address"
            />
            <div id="password-wrapper" className="relative">
              <Input
                type="password"
                size="lg"
                color="indigo"
                label="Password"
              />
              <Checkbox
                labelProps="text-sm"
                color="deep-purple"
                label="Remember Me"
                ripple={true}
              />
              <div className="absolute right-0 flex flex-row-10 justify-between">
                <p className="text-sm text-textPurple">Forgot Password?</p>
              </div>
            </div>
            <Button color="deep-purple" size="lg" block>
              Log in
            </Button>
            <div id="social-login">
              <p className="text-center text-sm">Need an account?</p>
              <p className="text-right text-textPurple">Sign up</p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
