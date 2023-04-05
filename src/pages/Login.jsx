import Navbar from "../components/NavBar";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInWithFacebook } from "../firebase-config";

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from "@react-oauth/google";


export default function Login() {

  const FACEBOOK_APP_ID = "1163696608359561";

  const responseMessage = (response) => {
    console.log(response);
    navigate("/Upload");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const responseFacebook = (responsefb) => {

    if(responsefb.accessToken) {
      console.log(responsefb);
      navigate('/Upload');
    }
  }

  const errorFacebook = (errorFacebookmsg) => {
    console.log(errorFacebookmsg);

  }

  const success = (success) => {
    console.log(success);
    navigate('/upload');
  }

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
              <Checkbox color="deep-purple" label="Remember Me" ripple={true} />
              <div className="absolute right-0 flex flex-row-10 justify-between">
                <p className="text-sm text-textPurple">Forgot Password?</p>
              </div>
            </div>
            <Button color="deep-purple" size="lg">
              Log in
            </Button>
            <div id="social-login">
              <p className="text-center text-sm">Need an account?</p>
              <p className="text-right text-textPurple">Sign up</p>
              <div className="flex flex-row-3 justify-around">
                

              <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
              <FacebookLogin appId={FACEBOOK_APP_ID} autoLoad={false} callback={responseFacebook} size="small" on onError={errorFacebook} onSuccess = {success}/>

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
