import Navbar from "../components/NavBar";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { signInWithGoogle } from "../firebase-config";

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
              {/* <div className="absolute right-0 flex flex-row-3 justify-between">
                <p className="text-sm text-textPurple">Forgot Password?</p>
              </div> */}
            </div>
            <Button color="deep-purple" size="lg" block>
              Log in
            </Button>
            <div id="social-login">
              <p className="text-center text-sm">Or log in with</p>
              <div className="flex flex-row-3 justify-around">
                {/* <Button
                  color="white"
                  size="lg"
                  ripple="light"
                  className="rounded-full"
                > */}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      fill="#7e57c2"
                    />
                  </svg> */}
                  <div className="bg-[#EDEDED] w-[77px] h-[72px] flex justify-center items-center rounded-[30px] hover:bg-white hover:border hover:border-indigo-300">
                    <FcGoogle onClick = {signInWithGoogle}size={30}/>
                  </div>
                {/* </Button> */}
                
                {/* <Button
                  color="white"
                  size="lg"
                  ripple="light"
                  className="rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    class="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path
                      d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      fill="#7e57c2"
                    ></path>{" "}
                  </svg>
                </Button> */}

{/* imported from react icons you reuse this */}

                <div className="bg-[#EDEDED] w-[77px] h-[72px] flex justify-center items-center rounded-[30px] hover:bg-white hover:border hover:border-indigo-300">
                    <BsFacebook size={30} color={'blue'}/>
                  </div>
              </div>
            </div>
            <div className="flex flex-row-3 justify-between">
              <p>Terms</p>
              <p>Privacy</p>
              <p>Security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
