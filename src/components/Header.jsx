import React, { useState } from "react";
import Button from "./Button";
import logo from "../assets/logo.png";
import burger from "../assets/burger_menu.svg";

const navLinks = ["Home", "About", "News", "Project", "Publication"];

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header>
      <div className="container max-w-container-xl">
        <nav className="w-full py-4 flex justify-between items-center relative">
          <div className="logo">
            <a href="/">
              <img
                src={logo}
                className="w-52 max-sm:w-36 2xl:w-64"
                alt="logo img"
              />
            </a>
          </div>
          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out overflow-hidden max-lg:gap-4 max-lg:items-start max-lg:w-full max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:bg-white max-lg:shadow-sm max-lg:flex-col z-10 
            ${
              isExpanded ? "grid-rows-[1fr] max-lg:pb-2" : "grid-rows-[0fr]"
            } lg:grid-rows-[1fr]`}
          >
            <div className="overflow-hidden flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              {navLinks.map((nav, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative text-dark-navy transition hover:text-tomato-red cursor-pointer after:mx-auto after:block after:h-[1px] after:w-0 after:bg-tomato-red after:transition-all hover:after:w-8 after:mt-2 after:absolute after:-bottom-1 after:left-0 after:right-0"
                >
                  {nav}
                </a>
              ))}
            </div>
          </div>
          <Button navbtn="Donate now" className="hidden lg:block" />
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img width={35} height={35} src={burger} alt="hamburger menu" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
