import Navbar from "../components/NavBar";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { signInWithFacebook } from "../firebase-config";
import React,{useState} from 'react';
import { GoogleLogin } from "@react-oauth/google";
import {useHistory} from "react-router-dom";


export default function Login() {

  const responseMessage = (response) => {
    console.log(response);
    navigate("/Upload");
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  const history=useHistory();
  const [credentials,setCredentials]=useState ({email:"",password:""});

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
              value={credentials.email}
              type="text"
              placeholder="Enter your email-address"
              onChange={event=>setCredentials({email:event.target.value,password:credentials.password})}
            />
            <div id="password-wrapper" className="relative">
              <Input
                value={credentials.password}
                type="password"
                size="lg"
                color="indigo"
                label="Password"
                placeholder={event=> setCredentials({email: credentials.email, password: event.target.value})}
              />
              <Checkbox color="deep-purple" label="Remember Me" ripple={true} />
              <div className="absolute right-0 flex flex-row-10 justify-between">
                <p className="text-sm text-textPurple underline">Forgot Password?Sign Up</p>
              </div>
            </div>
            <Button color="deep-purple" size="lg" disabled={ !(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(credentials.email)) }
            onClick={()=>{
              if (credentials.password === "let-me-in")
                history.push("/secret");
            }}>
              Log in
            </Button>
            <div id="social-login">
              <p className="text-center text-sm">Need an account?Sign Up</p>
              <div className="flex flex-row-3 justify-around">
                

              <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

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
