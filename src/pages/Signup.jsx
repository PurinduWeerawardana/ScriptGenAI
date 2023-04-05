import Navbar from "../components/NavBar";
import { Button, Input } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import FacebookLogin from "@greatsumini/react-facebook-login";

export default function Signup() {
  const FACEBOOK_APP_ID = "1163696608359561";

  const responseMessage = (response) => {
    console.log(response);
    navigate("/Upload");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const responseFacebook = (responsefb) => {
    if (responsefb.accessToken) {
      console.log(responsefb);
      navigate("/Upload");
    }
  };

  const errorFacebook = (errorFacebookmsg) => {
    console.log(errorFacebookmsg);
  };

  const success = (success) => {
    console.log(success);
    navigate("/upload");
  };

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
            <Input size="lg" color="indigo" label="Password" />
            <Input size="lg" color="indigo" label="Confirm Password" />
            <Button color="deep-purple" size="lg">
              Sign Up
            </Button>
            <div id="social-login">
              <p className="text-center text-sm underline">Already have an account? Log In</p><br/>

              <div className="flex flex-row-3 justify-around">
                <GoogleLogin
                  onSuccess={responseMessage}
                  onError={errorMessage}
                />
                <FacebookLogin
                  appId={FACEBOOK_APP_ID}
                  autoLoad={false}
                  callback={responseFacebook}
                  size="small"
                  on
                  onError={errorFacebook}
                  onSuccess={success}
                  style={{
                    backgroundColor: "#4267b2",
                    color: "#fff",
                    fontSize: "16px",
                    padding: "12px 24px",
                    border: "none",
                    borderRadius: "4px",
                  }}
                />
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
