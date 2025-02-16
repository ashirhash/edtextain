import React from "react";
import logo from "../assests/logo.png";
import fb from "../assests/fb.svg";
import insta from "../assests/insta.svg";
import twitter from "../assests/twitter.svg";
import linkedin from "../assests/linkedin.svg";




const Footer = () => {
  return (
    <footer className="bg-[#1a1e35] text-white pt-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} className="w-1/3 mb-3" alt="logoimg" />
          <p className="text-sm mt-2">
            Edtextain e.V. is registered as a nonprofit at the Administrative
            Court of Munich with the registration number VR 208721.
          </p>
          <address className="text-sm mt-2 not-italic">
            Address:
            <br />
            C/o Michaelzeit GmbH Bodenstedt 20
            <br />
            81243 München.
            <br />
            Phone: +49-157-40098694
            <br />
            Email: hello@edtextain.com
          </address>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                News
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Events
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Support</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Help & FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Terms of service
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-[#00b3ff]">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-600  flex justify-between max-sm:flex-col max-sm:gap-5 items-center px-12 text-sm py-3 mt-8">
        <p>Copyright © 2025 All Rights Reserved</p>
        <div className="flex justify-center items-center gap-6">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
