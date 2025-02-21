import React from "react";
import YellowUnderlineHeading from "./ui/Headings/YellowUnderlineHeading";
import {
  man_standing_on_rock,
  people_making_star,
  red_dots,
  red_highlights,
} from "../assets";
import ButtonSolid from "./ui/buttons/ButtonSolid";

const AboutSection = () => {
  return (
    <section id="about" className="mb-36 max-lg:mb-32 max-sm:mb-20">
      <div className="container 2xl:max-w-[1450px] flex flex-col gap-7 md:flex-row bg-white">
        <div className="md:w-1/2 relative flex flex-col items-center md:items-start">
          <img
            src={man_standing_on_rock}
            alt="man_standing_on_rock"
            className="rounded-lg shadow-lg max-lg:max-w-full max-lg:w-full max-md:max-w-[400px] max-lg:mr-auto relative z-[1] object-cover w-[75%] ml-auto"
          />
          <img
            src={red_dots}
            className="absolute left-24 -bottom-3 max-sm:-bottom-5 max-sm:left-2 max-sm:w-16 max-2xl:w-24"
            alt="red_dots"
          />
          <div className="shadow-10-10-24-0-0.12 border-[12px] border-white absolute z-[1] w-72 max-2xl:w-56 max-lg:w-52 left-0 -top-[8rem] max-xl:top-[10%] max-lg:-top-5 max-sm:w-36">
            <img
              src={people_making_star}
              className="w-full object-cover "
              alt="people_making_star"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <p className="text-light-gray mb-5 max-sm:mb-3 text-2xl max-2xl:text-xl max-lg:text-xl max-sm:text-base relative w-fit">
            Welcome to edtextain
            <img
              src={red_highlights}
              alt="highlighting shape"
              className="absolute -top-7 -right-[70px] max-2xl:w-[100px] max-xl:w-[80px] object-contain"
            />
          </p>
          <h2 className="text-[45px] max-lg:text-3xl max-2xl:text-4xl font-medium text-dark-navy mb-5 leading-snug">
            <YellowUnderlineHeading>Enabling people,</YellowUnderlineHeading>{" "}
            inspiring growth, supporting innovation
          </h2>
          <div className="lg:w-4/5">
            <p className="text-tomato-red font-medium mb-5 text-2xl max-2xl:text-xl max-sm:text-base max-lg:text-lg">
              We enable inter-cultural conversations.
            </p>
            <p className="text-light-gray text-lg max-lg:text-base leading-relaxed mb-4">
              Edtextain e.V. is a non-profit organization founded in 2014, in
              Munich, Germany. We support educational, technological, and
              professional advancement by providing essential tools, resources,
              and opportunities for people to thrive.
            </p>
            <p className="text-light-gray text-base font-semibold mb-6">
              Join our community and empower your journey to success.
            </p>
          </div>
          <ButtonSolid text="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
