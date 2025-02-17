import React from "react";
import Button from "./Button";
import logo from "../assets/logo.png";

const navLinks = ["Home", "About", "News", "Project", "Publication"];

const Header = () => {
  return (
    <header>
      <div className="container max-w-container-xl">
        <nav className="w-full py-4 flex justify-between items-center">
          <div className="logo ">
            <img src={logo} className="w-64" alt="logo img" />
          </div>
          <div className="links font-title flex items-center justify-center gap-10">
            {navLinks.map((nav, index) => (
              <a
                key={index}
                href=""
                className="relative text-dark-navy transition hover:text-tomato-red cursor-pointer after:mx-auto after:block after:h-[1px] after:w-0 after:bg-tomato-red after:transition-all hover:after:w-8 after:mt-2 after:absolute after:-bottom-1 after:left-0 after:right-0"
              >
                {nav}
              </a>
            ))}
          </div>
          <Button navbtn="Donate now" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
