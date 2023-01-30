import Navbar from "../components/NavBar";
import { Button, Input } from "@material-tailwind/react";
import illustration from "../static/images/login-illustration.png";
import blob from "../static/images/blob.png";

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
            <Input size="lg" color="indigo" label="Password" />
            <Button color="deep-purple" size="lg" block>
              Log in
            </Button>
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
