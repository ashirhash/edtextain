import React from "react";
import logo from "../assets/logo.png";
import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1e35] text-white pt-24 max-sm:pt-20">
      <div className="container mx-auto px-4 pb-16 grid max-md:flex max-md:gap-10 max-md:flex-col grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-4 max-lg:col-span-5 lg:mr-10">
          <img src={logo} className="w-52 mb-5 max-sm:w-40" alt="logoimg" />
          <p className="mb-4 leading-relaxed max-sm:text-sm">
            Edtextain e.V. is registered as a nonprofit at the Administrative
            Court of Munich with the registration number VR 208721.
          </p>
          <p className="leading-relaxed max-sm:text-sm">
            Address:
            <br />
            C/o Michaelzeit GmbH Bodenstedt 20
            <br />
            81243 München.
            <br />
            Phone: +49-157-40098694
            <br />
            Email: hello@edtextain.com
          </p>
        </div>

        <div className="col-start-6 col-span-3">
          <h3 className="text-2xl font-medium mb-6">Quick links</h3>
          <ul className="space-y-5">
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                News
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-4">
          <h3 className="text-2xl font-medium mb-6">Support</h3>
          <ul className="space-y-5">
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Help & FAQ
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-tomato-red">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-tomato-red py-3">
        <div className="container flex justify-between max-sm:flex-col max-sm:gap-5 items-center">
          <p className="text-base max-sm:text-sm">Copyright © 2025 All Rights Reserved</p>
          <div className="flex justify-center items-center gap-6">
            <a href="#">
              <img src={fb} alt="facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
