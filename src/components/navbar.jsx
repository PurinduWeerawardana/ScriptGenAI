import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../static/images/logo.png";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-full">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img src={logo} alt="ScripGenAI" />
        <div className="">
          <Button
            variant="outlined"
            color="deep-purple"
            size="md"
            className="hidden lg:inline-block px-8 m-2"
          >
            <span>Log in</span>
          </Button>
          <Button
            variant="gradient"
            color="deep-purple"
            size="md"
            className="hidden lg:inline-block px-8 m-2"
            onClick={
              () => {
                window.location.href = "https://scripgenai.com";
              }
            }
          >
            <span>Sign up</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          <Button variant="outlined" size="sm" fullWidth className="mb-2">
            <span>Log In</span>
          </Button>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Sign up</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
}
