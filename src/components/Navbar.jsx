import React from "react";
import Button from "./Button";
import logo from "../assests/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="w-full px-20 py-2  flex justify-between items-center ">
        <div className="logo ">
          <img src={logo} className="w-44" alt="logo img" />
        </div>
        <div className="links font-title flex items-center justify-center gap-10 ">
          <a
            href="#"
            className="relative hover:text-red-500 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative hover:text-red-500 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </a>
          <a
            href="#news"
            className="relative hover:text-red-500 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            News
          </a>
          <a
            href="#project"
            className="relative hover:text-red-500 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Project
          </a>
          <a
            href=""
            className="relative hover:text-red-500 after:content-[''] after:block after:h-0.5 after:w-0 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Publication
          </a>
        </div>
        <Button navbtn="Donate Now" />
      </nav>
    </>
  );
};

export default Navbar;
